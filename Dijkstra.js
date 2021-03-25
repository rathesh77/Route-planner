const Graph = require('./Graph.js')
const graphExamples = require('./graph-examples.js')
let wikipediaExample = graphExamples[0]
let codeForGeeksExample = graphExamples[1]
let otherExample = graphExamples[2]

class Dijkstra {
    /**
     * 
     * @param {String} departure 
     * @param {String} destination 
     * @param {Graph} g 
     * @param {Array} indexes 
     * @param {Object} min
     * @param {String} initial
     * @param {Map} fullPath
     * @returns {Object} {distanceTraveled: String, path: Array[String]}
     */
    static shortestPath(departure, destination, g, indexes, min, initial, fullPath) {
        if (!initial)
            initial = departure
        if (!fullPath)
            fullPath = new Map()
        if (!indexes)
            indexes = []
        if (!min) {
            min = { distanceTraveled: 0, previous: departure }
        }
        //console.log(min)
        //console.log('departure', departure);
        const currentNode = g.getNoeuds().get(departure)
        const endNode = g.getNoeuds().get(destination)
        if (!currentNode) {
            return 'starting node not found'
        }
        if (!endNode) {
            return 'ending node not found'
        }
        if (departure == destination) {
            let path = [destination]
            let previous = fullPath.get(destination)
            path.unshift(previous)
            while (previous != initial) {
                previous = fullPath.get(previous)
                path.unshift(previous)
            }
            return { distanceTraveled: min.distanceTraveled, path }
        }
        const adjacentNodes = currentNode.getAdj()
        const paths = this.getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, min)
        const { newMin, newIndexes } = this.getMin(paths)
        if (!newMin)
            return 'node not found'

        if (!fullPath.has(newMin.nextNode.valeur))
            fullPath.set(newMin.nextNode.valeur, newMin.previous.valeur)


        return this.shortestPath(newMin.nextNode.valeur, destination, g, newIndexes, newMin, initial, fullPath)
    }
    static getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, min) {
        //console.log(min)
        let paths = []
        let seen = {}
        let pathSize = 0
        for (let i = 0; i < adjacentNodes.length; i++) {
            if (adjacentNodes[i].valeur == min.previous.valeur)
                continue

            const newDistanceTraveled = min.distanceTraveled + adjacentNodes[i].getTete().get(currentNode.valeur).poids
            paths.push({ nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode })
            seen[adjacentNodes[i].valeur] = { distanceTraveled: newDistanceTraveled, index: pathSize, previous: currentNode }
            pathSize++
        }

        for (let i = 0; i < indexes.length; i++) {
            if (seen[indexes[i].nextNode.valeur]) {
                if (indexes[i].distanceTraveled < seen[indexes[i].nextNode.valeur].distanceTraveled) {
                    paths[seen[indexes[i].nextNode.valeur].index].distanceTraveled = indexes[i].distanceTraveled
                    paths[seen[indexes[i].nextNode.valeur].index].previous = indexes[i].previous
                    seen[indexes[i].nextNode.valeur].distanceTraveled = indexes[i].distanceTraveled
                }
            }
            else {
                paths.push(indexes[i])
            }
        }
        return paths
    }
    static getMin(adjacentNodes) {
        let newIndexes = []
        let min = adjacentNodes[0]

        for (let i = 1; i < adjacentNodes.length; i++) {
            if (min.distanceTraveled > adjacentNodes[i].distanceTraveled) {
                newIndexes.push(min)
                min = adjacentNodes[i]
            }
            else {
                newIndexes.push(adjacentNodes[i])

            }
        }
        return { newMin: min, newIndexes }
    }
}

console.log(Dijkstra.shortestPath('0', '4', codeForGeeksExample))
console.log(Dijkstra.shortestPath('0', '5', codeForGeeksExample))
console.log(Dijkstra.shortestPath('A', 'J', wikipediaExample))
console.log(Dijkstra.shortestPath('E', 'I', wikipediaExample))
console.log(Dijkstra.shortestPath('E', 'F', wikipediaExample))
console.log(Dijkstra.shortestPath('A', 'D', otherExample))

//console.log(codeForGeeksExample)
