import { IpService } from "../services/IpService.js";
import axios from "axios";
import { IPAPI_URL } from '../config/constants.js';
import { IpRepository } from "./../repositories/IPRepository.js";
import { IpApiService } from "./../services/IpApiService.js";

export class TranslationServiceFactory {
    constructor(type) {
        this._type = type;
    }

    create() {
        switch (this._type) {
            case "sqlite":
                return new IpService(new IpRepository());
            case "ip-api":
                const axiosInstance = axios.create({
                    baseURL: IPAPI_URL,
                });

                return new IpApiService(axiosInstance);
            default:
                throw new Error("Not implemented yet!");
        }
    }
}
