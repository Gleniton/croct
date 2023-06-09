export class InMemoryCache {
    constructor() {
        this._cache = new Map()
    }

    has(key) {
        return this._cache.has(key)
    }

    get(key) {
        if(this.has(key)) {
            return this._cache.get(key)
        }

        return null
    }

    set(key, value) {
        this._cache.set(key, value)
    }
}