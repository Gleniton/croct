import { TranslationServiceFactory } from "../src/classes/translationServiceFactory";

test.only("It should translate the IP using the ip-api", async () => {
    const ip = "59.90.255.63";
    const ipApiService = new TranslationServiceFactory("ip-api").create();
    const response = await ipApiService.getIpLocation(ip);

    expect(response).toMatchObject({
        latitude: 12.9716,
        longitude: 77.5946,
        country: "India",
        region: "Karnataka",
        city: "Bengaluru",
    })
});
