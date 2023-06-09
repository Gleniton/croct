export class IpService {
    constructor(ipRepository) {
        this._ipRepository = ipRepository
    }

    async getIpLocation(ip) {
        const IpLocation = await this._ipRepository.getByIp(ip);

        return IpLocation
    }
}