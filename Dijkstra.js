const Graph = require('./Graph')
const Noeud = require('./Noeud')
class Dijkstra {
    /**
     * 
     * @param {String} departure 
     * @param {String} destination 
     * @param {Array<String>} indexes 
     * @param {Number} distanceTraveled 
     * @param {Graph} g 
     * @returns 
     */
    static shortestPath(departure, destination, indexes, distanceTraveled, g, previous) {
        console.log("depart", departure)
        let currentStation = g.getNoeuds().get(departure)
        let SumDistances = distanceTraveled

        if (departure == destination) {
            return 'fini ' + distanceTraveled
        }
        let adjacentStations = [...currentStation.getAdj()]
        for (let i = 0; i < adjacentStations.length; i++) {
            if (adjacentStations[i].getValeur() == previous) {
                adjacentStations.splice(i, 1)
            }
        }
        adjacentStations = this.incrementWeights(adjacentStations, distanceTraveled, currentStation)
        //console.log(adjacentStations)
        adjacentStations = this.concat(currentStation, adjacentStations, indexes)

        const { min, newAdjacentStations } = this.getShortestDistance(currentStation, adjacentStations)


        if (!min)
            return "cette station n'existe pas"

/*        if (min.getTete().get(departure))
            SumDistances = min.getTete().get(departure).poids
        else*/
            SumDistances = min.getTete().get(min.from.valeur).poids
        //console.log(min.valeur)

        if (departure === '2')
            return
        return this.shortestPath(min.getValeur(), destination, newAdjacentStations, SumDistances, g, departure)
    }
    static incrementWeights(adjacentStations, distanceTraveled, currentStation) {
        let stations = []
        for (let i = 0; i < adjacentStations.length; i++) {
            let temp = (adjacentStations[i])

            temp.getTete().get(currentStation.valeur).poids += distanceTraveled
            //console.log(temp.from)
            if ( temp.from)
            {
                if (  temp.getTete().get(currentStation.valeur).poids < temp.getTete().get(temp.from.valeur).poids)
                temp.from = currentStation
            }
            else
            temp.from = currentStation

            stations.push(temp)
        }
        return stations
    }
    static concat(currentStation, adjacentStations, indexes) {
        let arr = [...adjacentStations]
        /*        if ( indexes[0])
                console.log(indexes[0].getTete())*/
        for (let i = 0; i < indexes.length; i++) {
            let found = false
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].getValeur() == indexes[i].getValeur()) {
                    found = true
                    let nextStep = arr[j].getTete().get(currentStation.valeur)
                    if (nextStep.poids > indexes[i].getTete().get(currentStation.valeur).poids) {
                        arr[j] = indexes[i]
                    }
                    break
                }
            }
            if (!found)
                arr.push(indexes[i])

        }
        //console.log('arr',arr)
        return arr
    }

    static getShortestDistance(currentStation, adjacentStations) {
        //console.log('paaaah',adjacentStations)
        let min = adjacentStations[0]
        let newAdjacentStations = []
        if (adjacentStations[0].valeur == 7) {
          //  console.log(adjacentStations[0].from)
        }
        for (let i = 1; i < adjacentStations.length; i++) {
            /*let currentPath = adjacentStations[i].getTete().get(currentStation.valeur)
            let previousPath = adjacentStations[i].getTete().get(adjacentStations[i].from.valeur) 
            if( currentPath && previousPath)
            {

            } */
            //console.log(adjacentStations[i])
            const nextStep =  adjacentStations[i].getTete().get(adjacentStations[i].from.valeur)

            const minStep =  min.getTete().get(min.from.valeur)
            //console.log(min.from)
            console.log(nextStep.poids,minStep.poids)

            if (nextStep.poids < minStep.poids) {
                newAdjacentStations.push(min)
                min = adjacentStations[i]
            }
            else {
                newAdjacentStations.push(adjacentStations[i])
            }
        }
        return { min, newAdjacentStations }
    }


}

let g = new Graph()
let nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < nodes.length; i++)
    g.addNoeud(nodes[i].toString())

g.addPath('0', '1', 4)
g.addPath('0', '7', 8)
g.addPath('1', '7', 11)
g.addPath('1', '2', 8)
g.addPath('2', '3', 7)
g.addPath('3', '4', 9)
g.addPath('4', '5', 10)
g.addPath('5', '6', 2)
g.addPath('6', '7', 1)
g.addPath('7', '8', 7)
g.addPath('6', '8', 6)
g.addPath('8', '2', 2)
g.addPath('2', '5', 4)



console.log(Dijkstra.shortestPath('0', '4', [], 0, g, '0'))
