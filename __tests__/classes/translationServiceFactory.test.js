import { TranslationServiceFactory } from "../../src/classes/translationServiceFactory.js";
import { IpService } from "../../src/services/IpService.js";
import { IpApiService } from "./../../src/services/IpApiService.js";

describe('TranslationServiceFactory Class', () => {
    it('should create an instance of IpService', () => {
        const translationServiceFactory = new TranslationServiceFactory('sqlite');
        const translationService = translationServiceFactory.create()
        expect(translationService).toBeInstanceOf(IpService);
    });

    it('should create an instance of IpApiService', () => {
        const translationServiceFactory = new TranslationServiceFactory('ip-api');
        const translationService = translationServiceFactory.create()
        expect(translationService).toBeInstanceOf(IpApiService);
    });
})
