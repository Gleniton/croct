import { redisClient } from './../cache/RedisCache.js'

class RedisRepository {
    constructor(client) {
        this._client = client
    }

    isOpen() {
        return this._client.isOpen
    }

    async get(key) {
        if(!this.isOpen()) {
            await this._client.connect();
        }

        const cachedValue = await this._client.get(key);

        if(cachedValue) {
            return JSON.parse(cachedValue);
        }

        return cachedValue
    }

    async set(key, value, options) {
        if(!this.isOpen()) {
            await this._client.connect();
        }

        if(typeof value !== 'string') {
            value = JSON.stringify(value);
        }

        return this._client.set(key, value, options);
    }
}

export const redisRepository = new RedisRepository(redisClient)
