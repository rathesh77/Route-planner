const Noeud = require("./Noeud")

module.exports = class Dijkstra {
    /**
     * 
     * @param {String} departure 
     * @param {String} destination 
     * @param {Graph} graph
     * @param {Array} oldPossiblePaths 
     * @param {Object} pathTaken 
     * @param {String} initialNode 
     * @param {Map} fullPath
     * @returns {Object} { distanceTraveled, path }
     */
    static shortestPath(departure, destination, graph, oldPossiblePaths, pathTaken, initialNode, fullPath) {

        if (departure == destination) {
            return 'starting node and ending node are the same...'
        }
        while (departure != destination) {
            if (!initialNode)
                initialNode = departure

            if (!fullPath)
                fullPath = new Map()
            if (!oldPossiblePaths)
                oldPossiblePaths = []
            if (!pathTaken) {
                pathTaken = { distanceTraveled: 0, previous: departure }
            }
            const currentNode = graph.getNoeuds().get(departure)
            const endNode = graph.getNoeuds().get(destination)
            if (!currentNode) {
                return 'starting node not found'
            }
            if (!endNode) {
                return 'ending node not found'
            }

            const adjacentNodes = currentNode.getAdj()
            const { nextMinimumPath, newPossiblePaths } = this.getNextPathsWithTraveledDistance(adjacentNodes, oldPossiblePaths, currentNode, pathTaken)
            if (!nextMinimumPath)
                return 'node not found'

            if (!fullPath.has(nextMinimumPath.nextNode.valeur))
                fullPath.set(nextMinimumPath.nextNode.valeur, nextMinimumPath.previous.valeur)

            departure = nextMinimumPath.nextNode.valeur
            oldPossiblePaths = newPossiblePaths
            pathTaken = nextMinimumPath
        }
        let path = [destination]
        let previous = fullPath.get(destination)
        path.unshift(previous)
        while (previous != initialNode) {
            previous = fullPath.get(previous)
            path.unshift(previous)
        }

        return { distanceTraveled: pathTaken.distanceTraveled, path }
    }
    /**
     * @param {Array} adjacentNodes
     * @param {Array} oldPossiblePaths
     * @param {Noeud} currentNode
     * @param {Object} pathTaken
     * @returns {Object} {nextMinimumPath, newPossiblePaths}
     */
    static getNextPathsWithTraveledDistance(adjacentNodes, oldPossiblePaths, currentNode, pathTaken) {

        let paths = []
        let seen = {}
        let nextMinimumPath = { nextNode: adjacentNodes[0], distanceTraveled: pathTaken.distanceTraveled + adjacentNodes[0].getTete().get(currentNode.valeur).poids, previous: currentNode }

        let index = -1
        for (let i = 0; i < adjacentNodes.length; i++) {
            const currentAdjNode = adjacentNodes[i]

            if (currentAdjNode.valeur == pathTaken.previous.valeur) {
                continue
            }
            const nextDistance = currentAdjNode.getTete().get(currentNode.valeur).poids
            const newDistanceTraveled = pathTaken.distanceTraveled + nextDistance

            paths.push({ nextNode: currentAdjNode, distanceTraveled: newDistanceTraveled, previous: currentNode })
            seen[currentAdjNode.valeur] = { distanceTraveled: newDistanceTraveled, index: paths.length - 1, previous: currentNode }

            if (nextMinimumPath.distanceTraveled > newDistanceTraveled) {
                nextMinimumPath = { nextNode: currentAdjNode, distanceTraveled: newDistanceTraveled, previous: currentNode }
                index = paths.length - 1
            }
        }
        for (let i = 0; i < oldPossiblePaths.length; i++) {
            const alternativePath = seen[oldPossiblePaths[i].nextNode.valeur]

            if (alternativePath) {
                if (oldPossiblePaths[i].distanceTraveled <= alternativePath.distanceTraveled) {

                    paths[alternativePath.index].distanceTraveled = oldPossiblePaths[i].distanceTraveled
                    paths[alternativePath.index].previous = oldPossiblePaths[i].previous
                }
                if (nextMinimumPath.distanceTraveled >= paths[alternativePath.index].distanceTraveled) {
                    nextMinimumPath = paths[alternativePath.index]
                    index = alternativePath.index
                }
            }
            else {
                paths.push(oldPossiblePaths[i])
                if (oldPossiblePaths[i].distanceTraveled < nextMinimumPath.distanceTraveled) {
                    nextMinimumPath = oldPossiblePaths[i]
                    index = paths.length - 1
                }
            }

        }
        if (index > -1)
            paths.splice(index, 1)
        return { nextMinimumPath, newPossiblePaths: paths }
    }
}