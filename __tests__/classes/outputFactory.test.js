import { OutputFactory } from "../../src/classes/outputFactory";
import { JsonlWriteStream } from "../../src/classes/jsonlWriteStream";

describe('OutputFactory Class', () => {
    it('should create an instance of JsonlWriteStream', () => {
        const outputFactory = new OutputFactory('json');
        const outputStream = outputFactory.create();
        expect(outputStream).toBeInstanceOf(JsonlWriteStream);
    });
    
    it('should should be equal to the standard output', () => {
        const outputFactory = new OutputFactory('stdOut');
        const outputStream = outputFactory.create();
        expect(outputStream).toBe(process.stdout);
    });
})
