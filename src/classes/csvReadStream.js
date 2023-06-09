import { ReadStream } from "fs";
import { createCsvParserWithHeaders } from "../transformers/csvToJsonTransformer.js";

export class CsvReadStream extends ReadStream {
    constructor(path, opts) {
        super(path, opts);
        this._toJsonTransformers = [createCsvParserWithHeaders()];
    }

    getToJsonTransformers() {
        return this._toJsonTransformers;
    }
}
