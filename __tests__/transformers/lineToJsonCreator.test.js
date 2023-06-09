import { lineToJsonCreator } from "../../src/transformers/lineToJsonCreator";
import { Readable } from "stream";

describe('lineToJson Async Generator', () => {
    const csvData = [
        '{"id": "1a301e29-6d6f-5e47-b130-e8fb5c0b1ee2", "ip": "59.90.255.63", "timestamp": 1684196387094}\n',
        '{"id": "fba283ed-9295-5907-848d-59da9d2664a1", "ip": "192.98.251.204", "timestamp": 1684196440840}\n',
        '{"id": "fba283ed-9295-5907-848d-59da9d2664a1", "ip": "192.98.251.204", "timestamp": 1684196476484}\n',
        '{"id": "9a68e620-6deb-58c1-be7b-8ef47190ec47", "ip": "223.232.180.59", "timestamp": 1684196516641}\n',
    ];

    let expected = [
        { id: "1a301e29-6d6f-5e47-b130-e8fb5c0b1ee2", ip: "59.90.255.63", timestamp: 1684196387094 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196440840 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196476484 },
        { id: "9a68e620-6deb-58c1-be7b-8ef47190ec47", ip: "223.232.180.59", timestamp: 1684196516641 },
    ];

    it('should match the objects', async () => {
        const readStream = Readable.from(csvData);
        const lineToJsonTransformer = lineToJsonCreator();
        
        let index = 0;
        for await(const object of lineToJsonTransformer(readStream)) {
            expect(object).toMatchObject(expected[index]);
            index++;
        }
    });
})
