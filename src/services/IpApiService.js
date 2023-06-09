export class IpApiService {
    constructor(httpClient) {
        this._httpClient = httpClient;
    }

    async getIpLocation(ip) {
        const options = {
            params: {
                fields: "country,regionName,city,lat,lon,query",
            },
        };

        const { data } = await this._httpClient.get(`/json/${ip}`, options);

        const { lat, lon, country, regionName, city } = data;

        const parsedResponse = {
            latitude: lat,
            longitude: lon,
            country,
            region: regionName,
            city,
        };

        return parsedResponse;
    }
}
