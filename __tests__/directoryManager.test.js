import path from "path";
import { DirectoryManager } from "../src/classes/directoryManager";

test("It should get list of files from a directory", async () => {
    const directoryManager = new DirectoryManager();

    const files = await directoryManager.getDirFilesByExtension(path.join("src", "inputs"), ["csv", "jsonl"]);

    expect(Array.isArray(files)).toBe(true);
});
