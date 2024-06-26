import fs from 'fs/promises';
import { topdf } from '../src/topdf.js';
import { fileTypeFromBuffer } from 'file-type';
import path from 'path';

describe("src/topdf.js", () => {
    describe(".topdf", () => {
        test("When sending docx file to converter, returns pdf", async () => {
            // Arrange
            let inputFilePath = path.join(__dirname, 'data/example.docx')

            // Act
            let outputPdfBuffer = await topdf(inputFilePath);

            // Assert
            let fileType = await fileTypeFromBuffer(outputPdfBuffer);

            expect(fileType.mime).to.equal('application/pdf');
            expect(outputPdfBuffer.length).to.closeTo(159200, 50);
        }, 10000);

        test("When sending docx file to converter, returns pdf", async () => {
            // Arrange
            let inputFilePath = path.join(__dirname, 'data/example.docx')

            // Act
            let outputPdfBuffer = await topdf(inputFilePath);

            // Assert
            let fileType = await fileTypeFromBuffer(outputPdfBuffer);
            expect(fileType.mime).to.equal('application/pdf');
            expect(outputPdfBuffer.length).to.closeTo(159200, 50);
        }, 10000);
    });
});
