const { BaseUrl } = require("./baseUrl");

const driverRepo = {

    async addNewDriver(driverObj){
        const response = await fetch(`${BaseUrl}/drivers/new`, {
            method: "POST",
            body: JSON.stringify(driverObj),
            headers: {"Content-Type": "application/json"}

        })
        return response.json()
    },

    async getAllDrivers(){
        const response = await fetch(`${BaseUrl}/drivers/all`)
        return response.json()
    },

    async getDriverById(driverId){
        const response = await fetch(`${BaseUrl}/drivers/${driverId}`)
        return response.json()
    }


};

module.exports = driverRepo;