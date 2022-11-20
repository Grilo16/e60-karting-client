const { BaseUrl } = require("./baseUrl");

const raceRepo = {

    async addNewRace(raceObj){
        const response = await fetch(`${BaseUrl}/races/new`, {
            method : "POST", 
            body : JSON.stringify(raceObj),
            headers : {"Content-Type": "application/json" }
        })
        return response.json()
    },

    async getAllRaces(){
        const response = await fetch(`${BaseUrl}/races/all`)
        return response.json();
    }

};

module.exports = raceRepo;