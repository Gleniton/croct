export const logger = async function* (source) {
    for await (const chunk of source) {
        console.log(chunk);
        yield chunk;
    }
};
