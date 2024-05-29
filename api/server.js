import express from "express";
import fileUpload from "express-fileupload";

import { topdf, topdfStream } from "../src/topdf.js";

const app = express();
app.use(fileUpload({
    debug: true,
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const PORT = 5000;

app.post("/", async (req, res) => {
    /*
    if (req.files) {
        let files = Array.isArray(req.files.files) ? req.files.files : [req.files.files];
        let newFile = await topdfStream(files[0]);
        res.sendFile(newFile);
    } else {
        console.log("Error?");
    }*/
    if(req.files){
        console.log(`req.files=${req.files}`);
        console.log("Sending pdf buffer to client...");
        //let inputBuffer = req.files.files.data;
        
        let inputFilePath = req.files.files.tempFilePath;

        let pdfBuffer = await topdf(inputFilePath);

        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    } else {
        res.status(200).send("hello");
    }
    console.log("recv end");
});

app.get("/", (req, res) => { res.sendStatus(200); });

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
    
