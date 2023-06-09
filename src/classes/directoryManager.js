import { readdir } from 'fs/promises'

export class DirectoryManager {
    constructor() {

    }

    async readDir(path) {
        const files = await readdir(path);
        return files;
    }

    async getDirFilesByExtension(path, extensions = []) {
        let files = await this.readDir(path);

        if(extensions.length) {
            const fileExtensionRegex = new RegExp(`\\.(${extensions.join('|')})$`);
            files = files.filter(file => file.match(fileExtensionRegex) !== null)
        }

        return files;
    }
}