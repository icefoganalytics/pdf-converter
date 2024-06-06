import express from 'express';
import fileUpload from 'express-fileupload';
import { fileTypeFromBuffer } from 'file-type';

import { topdf, topdfStream } from '../src/topdf.js';
import { isSupportedMimeType } from './supported_mime_types.js';

const app = express();
app.use(fileUpload({ debug: true }));

const PORT = 5000;

app.post('/', async (req, res) => {
    /*
    if (req.files) {
        let files = Array.isArray(req.files.files) ? req.files.files : [req.files.files];
        let newFile = await topdfStream(files[0]);
        res.sendFile(newFile);
    } else {
        console.log("Error?");
    }*/
        
    console.log('[/] recv');
    try {
        console.log('req.files: ', req.files);
        if(req.files){
            let inputFileBuffer = req.files.files.data;
            let inputFileType = await fileTypeFromBuffer(inputFileBuffer);
            
            // Checks if mimeType is supported by libreoffice
            if(!isSupportedMimeType(inputFileType.mime)){
                console.log(`[/] MIME type not supported: ${inputFileType.mime}`);
                res.status(415).send('Input file type is not supported for pdf conversion.');
                return;
            }
            console.log(`[/] MIME type supported: ${inputFileType.mime}`);

            let pdfBuffer = await topdfStream(inputFileBuffer);
            
            console.log('[/] Sending PDF buffer to client...');
            res.setHeader('Content-Type', 'application/pdf');
            res.status(200).send(pdfBuffer);
        } else {
            res.status(400).send('No input files given.');
            console.log('[/] Bad reqest');
        }
    } catch(err){
        console.error(err);
        res.sendStatus(500);
    }
    console.log('[/] recv end');
});

app.get('/', (req, res) => { res.sendStatus(400); });

app.get('/test', (req, res) => {
    res.status(200).send("hello");
    console.log('[/test] pass');
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });

