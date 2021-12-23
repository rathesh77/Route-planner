/** Class representing the Dijkstra algorithm. */
class Dijkstra {
    /**
     * returns the most optimal path from departure and arrival
     * @param {String} departure 
     * @param {String} arrival 
     * @param {Graph} graph
     * @returns {Object} { distanceTraveled: any, path: Array }
     */
    static shortestPath(departure, arrival, graph) {

        if (!departure || !arrival) {
            return 'you need to specify two nodes'
        }

        if (departure == arrival) {
            return 'starting node and ending node are the same...'
        }
        if (!graph.getNodes().get(departure) || !graph.getNodes().get(arrival)) {
            return 'starting node or ending node not found...'
        }

        let memory = new Map()
        let initialNode = departure
        let totalDistance = 0
        let previousNode = departure
        let fullPath = new Map()

        while (departure != arrival) {
            let temp = new Map()
            let nexts = graph.getNodes().get(departure).getNexts()
            let minDistance = nexts.values().next().value.getHeads().get(departure).weight + totalDistance
            let nextNodeToTake = nexts.values().next().value.value
            for (const node of nexts.values()) {
                let nextDistance = node.getHeads().get(departure).weight + totalDistance
                let nextNode = node.value
                if (nextNode == previousNode) {
                    continue
                }
                if (memory.has(nextNode)) {

                    if (memory.get(nextNode).travelledDistance >= nextDistance) {
                        memory.get(nextNode).travelledDistance = nextDistance
                        memory.get(nextNode).previousNode = departure
                    }
                    continue
                }
                if (nextDistance <= minDistance) {
                    nextNodeToTake = nextNode
                    minDistance = nextDistance
                }

                temp.set(nextNode, { travelledDistance: nextDistance, previousNode: departure })
            }
            previousNode = departure

            for (const [to, from] of memory) {
                let nextDistance = from.travelledDistance
                let nextNode = to

                if (nextDistance <= minDistance) {
                    nextNodeToTake = nextNode
                    minDistance = nextDistance
                    previousNode = from.previousNode
                }
            }

            memory = new Map([...memory, ...temp])


            if (memory.has(nextNodeToTake)) {
                memory.delete(nextNodeToTake)
            }

            departure = nextNodeToTake
            totalDistance = minDistance

            if (!fullPath.has(nextNodeToTake))
                fullPath.set(nextNodeToTake, previousNode)
        }

        let path = [graph.getNodes().get(arrival).getValue()]

        let end = arrival
        while (end != initialNode) {
            end = fullPath.get(end)
            path.unshift(graph.getNodes().get(end).getValue())
        }
        
        return { distanceTraveled: totalDistance, path }
    }

}

module.exports = Dijkstra
