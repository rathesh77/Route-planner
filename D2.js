const graphExamples = require('./graph-examples.js')
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
    static shortestPath(departure, destination, indexes, distanceTraveled, g, previous) {
        console.log('departure', departure);
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
            /*let previousNode = g.getNoeuds().get(endNode.previous)
            path.unshift(previousNode.valeur)

            while ((previousNode = g.getNoeuds().get(previousNode.previous)) != null) {
                path.unshift(previousNode.valeur)
            }*/
            return { distanceTraveled, path }
        }
        const adjacentNodes = [...currentNode.getAdj()]

        const paths = this.getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, distanceTraveled, previous)
        let { min, newIndexes } = this.getMin(paths)
        if (!min)
            return 'node not found'
        g.getNoeuds().get(min.nextNode.valeur).previous = min.previous.valeur
        return this.shortestPath(min.nextNode.valeur, destination, newIndexes, min.distanceTraveled, g, min.previous.valeur)
    }
    static getNextPathsWithTraveledDistance(adjacentNodes, indexes, currentNode, distanceTraveled, previous) {
        let paths = []
        let seen = {}
        let pathSize = 0
        for (let i = 0; i < adjacentNodes.length; i++) {
            if (adjacentNodes[i].valeur == previous)
                continue

            const newDistanceTraveled = distanceTraveled + adjacentNodes[i].getTete().get(currentNode.valeur).poids
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
        return { min, newIndexes }
    }
}

console.log(Dijkstra.shortestPath('0', '4', [], null, graphExamples[1], null))
console.log(Dijkstra.shortestPath('A', 'J', [], null, graphExamples[0], null))

