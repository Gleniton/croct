import { timestampDiffToMinutes } from "../utils/timesamp.js";
import { MAX_IP_CACHE_TIME } from "../config/constants.js";

export function translate(cacheService, translationService) {
    return async function* (source) {
        for await (const client of source) {
            const { id, ip } = client;

            if (ip === null || ip === "") {
                continue;
            }

            const key = `${id}_${ip}`;

            const cachedIpTranslation = await cacheService.get(key);

            if (
                cachedIpTranslation !== null &&
                timestampDiffToMinutes(cachedIpTranslation.lastTimestamp, client.timestamp) <= MAX_IP_CACHE_TIME
            ) {
                const clientWithIpTranslation = { ...client, ...cachedIpTranslation.location };
                yield clientWithIpTranslation;
                continue;
            }

            const IpTranslation = await translationService.getIpLocation(ip);

            await cacheService.set(key, {
                lastTimestamp: client.timestamp,
                location: IpTranslation,
            });

            const clientWithIpTranslation = { ...client, ...IpTranslation };
            yield clientWithIpTranslation;
        }
    };
}
