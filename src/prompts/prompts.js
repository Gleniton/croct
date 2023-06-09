import Enquirer from "enquirer";
import path from 'path';
const { Select, AutoComplete } = Enquirer;
import { DirectoryManager } from "../classes/directoryManager.js";

export const inputFileSelect = new Select({
    name: "inputFile",
    message: "Pick an input source",
    choices: [
        { name: "jsonl", message: "JSONL" },
        { name: "csv", message: "CSV" }
    ],
});

export const translationStrategySelect = new Select({
    name: "translationStrategy",
    message: "Pick a translation strategy",
    choices: [
        { name: "sqlite", message: "sqlite" },
        { name: "ip-api", message: "ip-api.com" },
    ],
});

export const outputStrategySelect = new Select({
    name: "outputStrategy",
    message: "Pick an output strategy",
    choices: [
        { name: "json", message: "JSON file" },
        { name: "stdOut", message: "Standard output" },
    ],
});

export const createInputFileAutocomplete = (choices) => {
    return new AutoComplete({
        name: "inputFile",
        message: "Select the input file",
        choices: choices,
    });
};

export const askInitialConfig = async function() {

    const inputFiles = await (new DirectoryManager()).getDirFilesByExtension(path.join('src', 'inputs'), ['csv', 'jsonl']);

    if(!inputFiles.length) {
        throw new Error("No input files found. Places your files inside the src/inputs folder");
    }

    const initialConfig = {
        inputFile: await (createInputFileAutocomplete(inputFiles)).run(),
        translationStrategy: await translationStrategySelect.run(),
        outputStrategy: await outputStrategySelect.run(),
    }

    return initialConfig;
}
