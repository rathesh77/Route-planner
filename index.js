const t = require('./graph-examples.js')
const Station = require('./Station')

class Dijkstra {

   static travel(station) {
        let clone = station
        console.log(clone.stationName)
        if (!clone.adjacentStations.length)
            return
        this.travel(clone.adjacentStations[Math.floor(Math.random() * clone.adjacentStations.length)])
    }
    static getMin(station, min, depth) {
        let cloneStation = station
        let cloneMin = min ? min : new Station(0, [])
        if (!cloneStation.adjacentStations.length || ( depth == 0 && depth != null))
            return cloneMin.distanceTraveled < cloneStation.distanceTraveled ? cloneMin : cloneStation

        let currentStation = cloneStation
        for (let i = 0; i < cloneStation.adjacentStations.length; i++) {
            let minFromTree = this.getMin(cloneStation.adjacentStations[i], cloneStation.distanceTraveled < cloneStation.adjacentStations[i].distanceTraveled ? cloneStation : cloneStation.adjacentStations[i], depth != null ? depth - 1 : null)
            currentStation = currentStation.distanceTraveled < minFromTree.distanceTraveled ? currentStation : minFromTree
        }
        return currentStation
    }

    static shortestPath(departure, destination, indexes, distanceTraveled) {
        if(distanceTraveled == 0)
        departure.distanceTraveled = 0
        let SumDistances = distanceTraveled
        if (departure.stationName == destination) {
            let reverseStation = departure, path = [departure.stationName]
            while ((reverseStation = reverseStation.from) != null) {
                path.push(reverseStation.stationName)
            }
            return { distanceTraveled, path }
        }
        let stations = []
        stations = this.stationsComingFrom(departure)
        stations = this.concat(stations, indexes)
        const { min, newAdjacentStations } = this.getShorterDistance(stations)

        if (!min)
            return "cette station n'existe pas"

        SumDistances = min.distanceTraveled
        console.table(stations)
        
        return this.shortestPath(Object.create(min), destination, newAdjacentStations, SumDistances)
    }
    static concat(adjacentStations, indexes) {
        let arr = [...adjacentStations]
        for (let i = 0; i < indexes.length; i++) {
            let found = false
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].stationName == indexes[i].stationName) {
                    found = true
                    if (arr[j].distanceTraveled > indexes[i].distanceTraveled) {
                        arr[j] = indexes[i]
                    }
                    break
                }
            }
            if (!found)
                arr.push(indexes[i])

        }
        return arr
    }
    static getShorterDistance(arr) {
        let min = arr[0]
        let newAdjacentStations = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].distanceTraveled < min.distanceTraveled) {
                newAdjacentStations.push(min)
                min = arr[i]

            }
            else {
                newAdjacentStations.push(arr[i])
            }
        }
        return { min, newAdjacentStations }
    }
    static stationsComingFrom(from) {
        let clone = from.adjacentStations
        let stations = []
        for (let i = 0; i < clone.length; i++) {
            let temp = Object.create(clone[i])
            temp.from = from
            temp.distanceTraveled += temp.from.distanceTraveled
            stations.push(temp)
        }
        return stations
    }
}

//console.log(Dijkstra.shortestPath(first.example1(), "ao", [], 0))
console.log(Dijkstra.shortestPath(t.wikipediaExample(), "J", [], 0))

console.log(Dijkstra.shortestPath(t.wikipediaExample(), "J", [], 0))

//console.log(t.example2().stations.get('1'))
//console.log(Dijkstra.shortestPath(t.example2().stations.get('0'), "8", [], 0))