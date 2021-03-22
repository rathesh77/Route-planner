class Station {

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
function travel(station) {
    let clone = station
    console.log(clone.stationName)
    if (!clone.adjacentStations.length)
        return
    travel(clone.adjacentStations[Math.floor(Math.random() * clone.adjacentStations.length)])
}
function getMin(station, min, depth) {
    let cloneStation = station
    let cloneMin = min ? min : new Station(0, [])
    if (!cloneStation.adjacentStations.length || !depth)
        return cloneMin.distanceTraveled < cloneStation.distanceTraveled ? cloneMin : cloneStation

    let currentStation = cloneStation
    for (let i = 0; i < cloneStation.adjacentStations.length; i++) {
        let minFromTree = getMin(cloneStation.adjacentStations[i], cloneStation.distanceTraveled < cloneStation.adjacentStations[i].distanceTraveled ? cloneStation : cloneStation.adjacentStations[i], depth - 1)// Math.min(this.distanceTraveled,dist)
        currentStation = currentStation.distanceTraveled < minFromTree.distanceTraveled ? currentStation : minFromTree
    }
    return currentStation
}

function shortestPath(departure, destination, indexes, distanceTraveled) {

    let SumDistances = distanceTraveled
    if (departure.stationName == destination) {
        let reverseStation = departure, path = [departure.stationName]
        while ((reverseStation = reverseStation.from) != null) {
            path.push(reverseStation.stationName)
        }
        return { distanceTraveled, path }
    }

    departure.adjacentStations = everyStationComeFrom(departure)
    departure.adjacentStations = concat(departure.adjacentStations, indexes)
    //departure.adjacentStations = departure.adjacentStations.concat(indexes)
    //console.table( departure.adjacentStations)

    const { min, newAdjacentStations } = getShorterDistance(departure.adjacentStations)
    //console.log(min)

    if (!min)
        return "cette station n'existe pas"
   
        SumDistances = min.distanceTraveled
    console.table(departure.adjacentStations)
    /* if ( departure.stationName == 'F')
         return*/
    //let newAdjacentStations = getAdjacentStationsExceptMin(min, departure.adjacentStations)
    return shortestPath(Object.create(min), destination, newAdjacentStations, SumDistances)
}
function concat(adjacentStations, indexes) {
    let arr = [...adjacentStations]
    for (let i = 0; i < indexes.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if ( arr[j].stationName == indexes[i].stationName) {
                found = true
                if ( arr[j].distanceTraveled > indexes[i].distanceTraveled )
                {
                    arr[j] = indexes[i]
                }
            }
        }
        if ( !found)
        arr.push(indexes[i])

    }
    //console.table(arr)
    return arr
}
function getShorterDistance(arr) {
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
function everyStationComeFrom(from) {
    let clone = from
    for (let i = 0; i < clone.adjacentStations.length; i++) {
        clone.adjacentStations[i].from = from
        clone.adjacentStations[i].distanceTraveled += clone.adjacentStations[i].from.distanceTraveled

    }
    return clone.adjacentStations
}
function getAdjacentStationsExceptMin(min, stations) {
    return stations.filter(s => s.distanceTraveled != min.distanceTraveled)
}

/*
let root = new Station(788, [], "a")
let n1 = new Station(728, [], "b")
let n2 = new Station(578, [], "c")
let n3 = new Station(698, [], "d")

n1.addAdjacentStation(new Station(456, [new Station(459, [], "f"), new Station(698, [], "g"), new Station(700, [], "h")] , "e"))
n1.addAdjacentStation(new Station(485, [new Station(425, [], "j"), new Station(856, [], "k"), new Station(264, [], "l")], "i"))
n1.addAdjacentStation(new Station(369, [new Station(400, [], "n"), new Station(320, [new Station(296, [], "o"), new Station(296, [], "p")], "qwesh"), new Station(489, [])], "m"))

n2.addAdjacentStation(new Station(523, [new Station(300, [], "r"), new Station(278, [], "s"), new Station(264, [], "t")], "q"))
n2.addAdjacentStation(new Station(444, [new Station(268, [], "v"), new Station(639, [], "w"), new Station(221, [], "x")], "u"))
n2.addAdjacentStation(new Station(237, [new Station(298, [], "z"), new Station(666, [new Station(547, [], "aa"), new Station(852, [], "ab")], "ac"), new Station(456, [], "ad")], "y"))

n3.addAdjacentStation(new Station(894, [new Station(447, [], "af"), new Station(999, [], "ag"), new Station(589, [], "ah")], "ae"))
n3.addAdjacentStation(new Station(785, [new Station(288, [], "aj"), new Station(282, [], "ak"), new Station(247, [], "al")], "ai"))
n3.addAdjacentStation(new Station(547, [new Station(457, [], "an"), new Station(563, [new Station(389, [], "ao"), new Station(931, [], "ap")],"az"), new Station(546, [], "aq")], "am"))
*/

let root = new Station(0, [], "A")
let n1 = new Station(85, [], "B")
let n2 = new Station(217, [], "C")
let n3 = new Station(173, [], "E")

n1.addAdjacentStation(new Station(80, [new Station(0, [new Station(84, [], "J")], "I")], "F"))
n2.addAdjacentStation(new Station(186, [], "G"))
n2.addAdjacentStation(new Station(103, [new Station(183, [], "D"), new Station(167, [], "J")], "H"))
n3.addAdjacentStation(new Station(502, [], "J"))


root.addAdjacentStation([n1, n2, n3])
console.log(shortestPath(Object.create(root), "J", [], 0))

//console.log(root)




//concat([new Station(11, [], 'a'), new Station(10, [], 'b'), new Station(10, [], 'c')], [new Station(10, [], 'd'), new Station(2, [], 'b'), new Station(10, [], 'a')]) // a 10,b 10,c 10,d 10,e 10