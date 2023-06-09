import { createClient } from "redis";
import { REDIS_HOST, REDIS_PORT } from '../config/constants.js';

const url = `redis://${REDIS_HOST}:${REDIS_PORT}`

export const redisClient = createClient({
    url: url,
});

redisClient.on("error", function (err) {
    console.error("Something went wrong when starting Redis " + err);
});
