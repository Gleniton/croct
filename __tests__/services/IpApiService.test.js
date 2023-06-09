import { IpApiService } from "../../src/services/IpApiService.js";
const mockAxios = jest.genMockFromModule("axios");

mockAxios.get = jest.fn(() => ({
    data: {
        lat: 12.9716,
        lon: 77.5946,
        country: "India",
        regionName: "Karnataka",
        city: "Bengaluru",
    },
}));

describe("IpApiService", () => {
    it("should be able to translate an ip", async () => {
        const ip = "59.90.255.63";

        const translation = {
            latitude: 12.9716,
            longitude: 77.5946,
            country: "India",
            region: "Karnataka",
            city: "Bengaluru",
        };

        const ipApiService = new IpApiService(mockAxios);
        const response = await ipApiService.getIpLocation(ip);

        expect(mockAxios.get).toHaveBeenCalledWith(`/json/${ip}`, {
            params: { fields: "country,regionName,city,lat,lon,query" },
        });
        expect(response).toEqual(translation);
    });
});
