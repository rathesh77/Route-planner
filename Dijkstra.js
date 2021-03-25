const graphExamples = require('./graph-examples.js')
let wikipediaExample = graphExamples[0]
let codeForGeeksExample = graphExamples[1]
let otherExample = graphExamples[2]

class Dijkstra {
    /**
     * 
     * @param {String} departure 
     * @param {String} destination 
     * @param {Array<Object>} indexes 
     * @param {Number} distanceTraveled 
     * @param {Graph} g 
     * @param {Object} previous
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
        const { newMin, newIndexes } = this.getMinAndNewIndexes(adjacentNodes, indexes, currentNode, min)
        //const { newMin, newIndexes } = this.getMin(paths)
        if (!newMin)
            return 'node not found'

        if (!fullPath.has(newMin.nextNode.valeur))
            fullPath.set(newMin.nextNode.valeur, newMin.previous.valeur)


        return this.shortestPath(newMin.nextNode.valeur, destination, g, newIndexes, newMin, initial, fullPath)
    }
    static getMinAndNewIndexes(adjacentNodes, indexes, currentNode, min) {
        //console.log(min)
        let paths = []
        let seen = {}
        let pathSize = 0
        let minWeight = { nextNode: adjacentNodes[0], distanceTraveled: min.distanceTraveled + adjacentNodes[0].getTete().get(currentNode.valeur).poids, previous: currentNode }

        let newIndexes = []
        for (let i = 1; i < adjacentNodes.length; i++) {
            if (adjacentNodes[i].valeur == min.previous)
                continue

            const newDistanceTraveled = min.distanceTraveled + adjacentNodes[i].getTete().get(currentNode.valeur).poids
            paths.push({ nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode })
            seen[adjacentNodes[i].valeur] = { distanceTraveled: newDistanceTraveled, index: pathSize, previous: currentNode }
            //pathSize++
            if (newDistanceTraveled < minWeight.distanceTraveled) {
                newIndexes.push({ nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode })
                minWeight = { nextNode: adjacentNodes[i], distanceTraveled: newDistanceTraveled, previous: currentNode }
            }
            else {
                newIndexes.push(adjacentNodes[i])

            }
        }

        for (let i = 0; i < indexes.length; i++) {
            if (seen[indexes[i].nextNode.valeur]) {
                if (indexes[i].distanceTraveled < seen[indexes[i].nextNode.valeur].distanceTraveled) {
                    minWeight = indexes[i]
                    //paths[seen[indexes[i].nextNode.valeur].index].distanceTraveled = indexes[i].distanceTraveled
                    //paths[seen[indexes[i].nextNode.valeur].index].previous = indexes[i].previous
                    //seen[indexes[i].nextNode.valeur].distanceTraveled = indexes[i].distanceTraveled
                }
            }
            else {
                if (indexes[i].distanceTraveled < minWeight.distanceTraveled) {
                    newIndexes.push(minWeight)
                    minWeight = indexes[i]
                }
                else
                    paths.push(indexes[i])
            }
        }
        return { newMin: minWeight, newIndexes: paths }
    }
    /*static getMin(adjacentNodes) {
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
    }*/
}

console.log(Dijkstra.shortestPath('0', '4', codeForGeeksExample))
console.log(Dijkstra.shortestPath('A', 'J', wikipediaExample))
console.log(Dijkstra.shortestPath('E', 'F', wikipediaExample))
console.log(Dijkstra.shortestPath('A', 'F', otherExample))

//console.log(codeForGeeksExample)
