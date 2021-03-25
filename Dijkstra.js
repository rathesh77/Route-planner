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
     * @returns 
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
        const { newMin, newIndexes } = this.getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, min)
        if (!newMin)
            return 'node not found'

        if (!fullPath.has(newMin.nextNode.valeur))
            fullPath.set(newMin.nextNode.valeur, newMin.previous.valeur)


        return this.shortestPath(newMin.nextNode.valeur, destination, g, newIndexes, newMin, initial, fullPath)
    }
    static getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, min) {
        let paths = []
        let seen = {}
        let pathSize = 0
        let minimum = { nextNode: adjacentNodes[0], distanceTraveled: min.distanceTraveled + adjacentNodes[0].getTete().get(currentNode.valeur).poids, previous: currentNode }

        let index = -1
        for (let i = 0; i < adjacentNodes.length; i++) {
        
            const newDistanceTraveled = min.distanceTraveled + adjacentNodes[i].getTete().get(currentNode.valeur).poids
            paths.push({ nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode })
            seen[adjacentNodes[i].valeur] = { distanceTraveled: newDistanceTraveled, index: pathSize, previous: currentNode }
            pathSize++
            if (minimum.distanceTraveled > newDistanceTraveled) {
                minimum = { nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode }
                index = paths.length - 1
            }
        }

        for (let i = 0; i < indexes.length; i++) {
            if (seen[indexes[i].nextNode.valeur]) {
                if (indexes[i].distanceTraveled < seen[indexes[i].nextNode.valeur].distanceTraveled) {
                    paths[seen[indexes[i].nextNode.valeur].index].distanceTraveled = indexes[i].distanceTraveled
                    paths[seen[indexes[i].nextNode.valeur].index].previous = indexes[i].previous
                    seen[indexes[i].nextNode.valeur].distanceTraveled = indexes[i].distanceTraveled

                    minimum = indexes[i]
                    index = seen[indexes[i].nextNode.valeur].index
                }
            }
            else {
                paths.push(indexes[i])
                if (indexes[i].distanceTraveled < minimum.distanceTraveled) {
                    minimum = indexes[i]
                    index = paths.length - 1
                }
            }
        }
        if (index != -1)
            paths.splice(index, 1)
        return { newMin: minimum, newIndexes: paths }
    }

}

console.log(Dijkstra.shortestPath('0', '4', codeForGeeksExample))
console.log(Dijkstra.shortestPath('0', '5', codeForGeeksExample))
console.log(Dijkstra.shortestPath('A', 'J', wikipediaExample))
console.log(Dijkstra.shortestPath('E', 'I', wikipediaExample))
console.log(Dijkstra.shortestPath('E', 'F', wikipediaExample))
console.log(Dijkstra.shortestPath('A', 'D', otherExample))

//console.log(codeForGeeksExample)
