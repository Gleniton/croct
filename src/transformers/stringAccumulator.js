export const stringAccumulator = function (size = 1) {
    let chunkBuffer = "";
    let counter = 0;
    return async function* (source) {
        for await (const s of source) {
            chunkBuffer += s;
            counter++;

            if (counter >= size) {
                yield chunkBuffer;
                chunkBuffer = "";
                counter = 0;
            }
        }

        if (chunkBuffer.length) {
            yield chunkBuffer;
            chunkBuffer = "";
            counter = 0;
        }
    };
};
