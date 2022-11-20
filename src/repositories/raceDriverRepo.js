const { BaseUrl } = require("./baseUrl");

const raceDriverRepo = {

    async addDriverToRace(driverId, raceId){
        const response = await fetch(`${BaseUrl}/race_drivers/${driverId}/race/${raceId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
        })
        return response.json();
    },

    async getAllRaceDriversByDriversId(driverId){
        const response = await fetch(`${BaseUrl}/race_drivers/${driverId}`)
        return response.json()
    },
    
    async setRaceDriversPosition(positionObj){
        const response = await fetch(`${BaseUrl}/race_drivers/setPositions`, {
            method: "PATCH",
            body: JSON.stringify(positionObj),
            headers: {"Content-Type": "application/json"}
        })
        return response.json()
    },

    async getRaceResulByRaceId(raceId){
       const response = await fetch(`${BaseUrl}/race_drivers/result/${raceId}`) 
       return response.json()
    }


}

module.exports = raceDriverRepo;