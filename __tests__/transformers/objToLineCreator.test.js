import { ObjToLineCreator } from "../../src/transformers/objToLineCreator";
import { Readable } from "stream";

describe('objectToLine to transformer', () => {
    let data = [
        { id: "1a301e29-6d6f-5e47-b130-e8fb5c0b1ee2", ip: "59.90.255.63", timestamp: 1684196387094 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196440840 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196476484 },
        { id: "9a68e620-6deb-58c1-be7b-8ef47190ec47", ip: "223.232.180.59", timestamp: 1684196516641 },
    ];

    it('should be able to transform objects into string in the jsonl format', async () => {
        const objectToLineWithLineEnding = ObjToLineCreator(true);
        const readStream = Readable.from(data);

        let index = 0;
        for await (const object of objectToLineWithLineEnding(readStream)) {
            expect(object).toBe(JSON.stringify(data[index]) + '\n');
            index++;
        }
    });

    it('should be able to transform objects string', async () => {
        const objectToLineWithLineEnding = ObjToLineCreator();
        const readStream = Readable.from(data);

        let index = 0;
        for await (const object of objectToLineWithLineEnding(readStream)) {
            expect(object).toBe(JSON.stringify(data[index]));
            index++;
        }
    });
})
