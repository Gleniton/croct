import { setTimeout } from 'timers/promises';

export const delayStreamCreator = function (ms) {
    const delayStream = async function* (source) {
        for await (const chunk of source) {
            await setTimeout(ms);
            yield chunk;
        }
    };

    return delayStream;
};
