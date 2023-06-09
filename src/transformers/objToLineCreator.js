export const ObjToLineCreator = function (addLineEnding = false) {
    return async function* (source) {
        for await (const obj of source) {
            if (!Object.keys(obj).length) {
                continue;
            }

            let line = JSON.stringify(obj);
            if (addLineEnding) {
                line += "\n";
            }

            yield line;
        }
    };
};
