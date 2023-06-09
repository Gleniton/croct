import path from "path";
import { JsonlWriteStream } from "./../classes/jsonlWriteStream.js";

export class OutputFactory {
    constructor(type) {
        this._type = type;
    }

    create() {
        switch (this._type) {
            case "json":
                return new JsonlWriteStream(path.join('src', 'outputs', 'output.jsonl'));
            case "stdOut":
                return process.stdout;
            default:
                throw new Error("Not implemented yet");
        }
    }
}
