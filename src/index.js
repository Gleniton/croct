import "dotenv/config.js";
import { pipeline } from "stream/promises"
import { askInitialConfig } from './prompts/prompts.js'
import { translate } from "./transformers/ipTranslationTransformer.js"
import { ObjToLineCreator } from './transformers/objToLineCreator.js'
import { stringAccumulator } from './transformers/stringAccumulator.js'
import { InputFactory } from "./classes/inputFactory.js";
import { TranslationServiceFactory } from "./classes/translationServiceFactory.js";
import { redisRepository } from './repositories/RedisRepository.js';
import { OutputFactory } from "./classes/outputFactory.js";
import { OUTPUT_BUFFER_SIZE } from './config/constants.js'
import path from 'path';

const start = async function() {
    const initialConfig = await askInitialConfig();

    try {
        const filepath = path.join('src', 'inputs', initialConfig.inputFile);
        const inputStream = (new InputFactory()).createFromPath(filepath);
        const translationService = new TranslationServiceFactory(initialConfig.translationStrategy).create();
        const outputStream = new OutputFactory(initialConfig.outputStrategy).create();
        
        let pipelineStages = [
            inputStream,
            ...inputStream.getToJsonTransformers(),
            translate(redisRepository, translationService),
            ObjToLineCreator(true),
            stringAccumulator(OUTPUT_BUFFER_SIZE),
            outputStream,
        ]
        await pipeline(...pipelineStages)
    } catch (error) {
        console.error("Pipeline failed.", error)
    }
}

await start();
process.exit(0);