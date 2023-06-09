export const lineToJsonCreator = function () {
    let buffer = "";

    return async function* (source) {
        for await (const chunk of source) {
            const stringChunk = chunk.toString();
            for (const char of stringChunk) {
                if (char === "\n" || char === "\r\n" || char === "\r") {
                    yield JSON.parse(buffer);
                    buffer = "";
                    continue;
                }

                buffer += char;
            }
        }
    };
};
