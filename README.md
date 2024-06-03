# Any file to PDF converter
Most file types to PDF converter service.

## Deployment
Converter service can be easily deployed with the following command:
```bash
docker compose up -d
```
Stop service command:
```bash
docker compose down
```

> NOTE: Assure port 5000 is not being used.

## Usage
### Single file conversions
1. `cURL`
```bash
curl -X POST http://localhost:5000/ -F "files=@/path/to/file.docx" -o output.pdf
```
2. `axios`
```js
import fs from 'fs/promises';
import axios from 'axios';

const API_URL = 'http://localhost:5000/';

let inputFile = await fs.readFile("/path/to/input/file");

let res = axios.request({
    url: API_URL,
    responseType: 'arraybuffer',    // important
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    data: {
        'files': inputFile
    }
});

let outputFile = res.data;  // PDF buffer

// Save to file?
await fs.writeFile('/path/to/output/file.pdf', outputFile);
```
### Bunch file conversions
Currently not implemented

