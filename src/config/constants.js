const { env } = process;

export const IPAPI_URL = env.IPAPI_URL || 'http://ip-api.com';

export const REDIS_HOST = env.REDIS_HOST || 'localhost';
export const REDIS_PORT = env.REDIS_PORT || '6379';

export const MAX_IP_CACHE_TIME = env.MAX_IP_CACHE_TIME ? parseInt(env.MAX_IP_CACHE_TIME) : 30;

export const HIGH_WATER_MARK = env.HIGH_WATER_MARK ? parseInt(env.HIGH_WATER_MARK) : 97

export const OUTPUT_BUFFER_SIZE = env.OUTPUT_BUFFER_SIZE ? parseInt(env.OUTPUT_BUFFER_SIZE) : 1
