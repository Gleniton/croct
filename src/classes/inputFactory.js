import path from "path";
import { CsvReadStream } from "./../classes/csvReadStream.js";
import { JsonlReadStream } from "./../classes/jsonlReadStream.js";
import { HIGH_WATER_MARK } from "../config/constants.js";

export class InputFactory {
    constructor() {}

    createFromPath(filepath) {
        const extension = path.extname(filepath).slice(1);

        switch (extension) {
            case "csv":
                return new CsvReadStream(filepath, { highWaterMark: HIGH_WATER_MARK });
            case "jsonl":
                return new JsonlReadStream(filepath, { highWaterMark: HIGH_WATER_MARK });
            default:
                throw new Error("Not implemented yet");
        }
    }
}
