const { BaseUrl } = require("./baseUrl");

const raceDriverRepo = {

    async addDriverToRace(driverId, raceId){
        const response = await fetch(`${BaseUrl}/race_drivers/${driverId}/race/${raceId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
        })
        return response.json();
    }

}

module.exports = raceDriverRepo;