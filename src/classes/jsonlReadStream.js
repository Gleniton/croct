import { ReadStream } from "fs";
import { lineToJsonCreator } from "./../transformers/lineToJsonCreator.js";

export class JsonlReadStream extends ReadStream {
    constructor(path, opts) {
        super(path, opts);
        this._toJsonTransformers = [lineToJsonCreator()];
    }

    getToJsonTransformers() {
        return this._toJsonTransformers;
    }
}
