module.exports = class Station {
    /**
     * 
     * @param {Number} distanceTraveled 
     * @param {Array<Station>} adjacentStations 
     */
    constructor(distanceTraveled, adjacentStations, stationName) {

        this.stationName = stationName
        this.distanceTraveled = distanceTraveled
        this.adjacentStations = adjacentStations
    }
    /**
     * 
     * @param {Array<Station>} adjacentStations 
     */
    addAdjacentStation(adjacentStations) {
        this.adjacentStations = this.adjacentStations.concat(adjacentStations)
    }
}