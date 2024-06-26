import fs from 'fs/promises';
import { topdf } from '../src/topdf.js';
import { fileTypeFromBuffer } from 'file-type';
import path from 'path';

describe("api/server.js", () => {
    describe("GET http://localhost:5000/test", () => {
        test("When accessed, returns hello", async () => {
            // Arrange
            let endpoint = 'http://localhost:5000/test';

            // Act
            let response = await fetch(endpoint, {
                method: 'GET',
            });

            // Assert
            expect(response.status).to.equal(200);
            expect(response.body).to.equal('hello');
        }, 10000);
    });
});
