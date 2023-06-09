import { createCsvParserWithHeaders } from "../../src/transformers/csvToJsonTransformer.js";
import { Readable } from "stream";

describe("csvToJsonTransformer", () => {
    const csvToJsonTransformer = createCsvParserWithHeaders();
    const csvData = [
        "timestamp,id,ip\n",
        "1684196387094,1a301e29-6d6f-5e47-b130-e8fb5c0b1ee2,59.90.255.63\n",
        "1684196440840,fba283ed-9295-5907-848d-59da9d2664a1,192.98.251.204\n",
        "1684196476484,fba283ed-9295-5907-848d-59da9d2664a1,192.98.251.204\n",
        "1684196516641,9a68e620-6deb-58c1-be7b-8ef47190ec47,223.232.180.59\n",
    ];

    let expected = [
        { id: "1a301e29-6d6f-5e47-b130-e8fb5c0b1ee2", ip: "59.90.255.63", timestamp: 1684196387094 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196440840 },
        { id: "fba283ed-9295-5907-848d-59da9d2664a1", ip: "192.98.251.204", timestamp: 1684196476484 },
        { id: "9a68e620-6deb-58c1-be7b-8ef47190ec47", ip: "223.232.180.59", timestamp: 1684196516641 },
    ];

    it("should be able to parse csv lines to objects from input stream", (done) => {
        let consumedData = [];

        Readable.from(csvData)
            .pipe(csvToJsonTransformer)
            .on("data", (csvResult) => {
                consumedData.push(csvResult);
            })
            .on("end", () => {
                try {
                    for (const [index, object] of consumedData.entries()) {
                        expect(object).toMatchObject(expected[index]);
                    }
                    done();
                } catch (error) {
                    done(error);
                }
            });
    });
});
