import { knexDb } from "../database/knex.js";

export class IpRepository {
    constructor() {}

    async getByIp(ip) {
        const response = await knexDb("IPs")
            .select("latitude")
            .select("longitude")
            .select("country")
            .select("state as region")
            .select("city")
            .where("ip", ip)
            .first();

        return response;
    }
}
