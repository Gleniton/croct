import path from 'path';
import { CsvReadStream } from '../../src/classes/csvReadStream.js'
import { JsonlReadStream } from "../../src/classes/jsonlReadStream.js";
import { InputFactory } from '../../src/classes/inputFactory.js';

describe('InputFactory Class', () => {
    let inputFactory;
    let inputFolder = path.join('src', 'inputs');

    beforeEach(() => {
        inputFactory = new InputFactory();
    });

    it('should create a CsvReadStream Class ', () => {
        const filePath = path.join(inputFolder, 'input.csv');
        const readStream = inputFactory.createFromPath(filePath);
        expect(readStream).toBeInstanceOf(CsvReadStream);
    });

    it('should create a JsonlReadStream Class ', () => {
        const filePath = path.join(inputFolder, 'input.jsonl');
        const readStream = inputFactory.createFromPath(filePath);
        expect(readStream).toBeInstanceOf(JsonlReadStream);
    });
})
