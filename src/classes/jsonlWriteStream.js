import { WriteStream } from 'fs';

export class JsonlWriteStream extends WriteStream {
    constructor(path, opts) {
        super(path, opts)
    }
}