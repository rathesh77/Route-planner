const Graph = require('./Graph')
/** Class representing the A* algorithm. */
class AStar {
    /**
     * Returns the most optimal path
     * @param {String} departure 
     * @param {String} arrival 
     * @param {Graph} graph
     * @returns {Object} { distanceTraveled, path }
     */
    static shortestPath(departure, arrival, g, heuristic) {
        if (departure == arrival)
            return 'starting node and ending node are the same...'
        if (heuristic == null) {
            heuristic = () => 0
        }
        //on declare 2 tableaux : openlist et closedlist
        let openList = [], closedList = []
        //on ajoute departure à openlist
        const nodes = g.getNodes()
        nodes.get(departure).cost = 0
        nodes.get(departure).fscore = 0
        nodes.get(departure).previous = null

        openList.push(departure)
        //tant que open list n'est pas vide
        while (openList.length > 0) {
            //on trouve le noeud ayant la plus faible heuristic, et on le retire de openlist
            let current = AStar.findMinFScoreAndRemoveItFromOpenList(openList, g)
            //si current est egal à arrival
            if (current == arrival) {
                //on reconstruit le chemin (chemin = reconstructPath(D, graph))
                //on arrête le programme car on a trouvé un chemin optimal (en retnournant le chemin)
                const path = AStar.reconstructPath(current, g)
                return path
            }
            //pour chaque voisin 'V' du noeud courant "current"
            const currentNode = nodes.get(current)
            for (const [V, node] of currentNode.getNexts()) {
                // Si V est dans closedList, on l'ignore
                if (AStar.isInList(V, closedList) != -1)
                    continue
                const indexOfVInsideOpenList = AStar.isInList(V, openList)
                const gscore = currentNode.cost + node.getHeads().get(current).weight
                const fscore = gscore + heuristic(V, arrival, g)
                if (indexOfVInsideOpenList == -1 || nodes.get(openList[indexOfVInsideOpenList]).cost > gscore) {
                    //on ajoute V à openList
                    if (indexOfVInsideOpenList == -1)
                        openList.push(V)
                    //V.Cout = D.cout +  costBetweenDAndCurrent <- costBetweenDAndCurrent = temps qu'on prend pour aller de current vers V
                    node.cost = gscore
                    //V.heuristic =  V.cout + hscore (V, arrival)
                    node.fscore = fscore
                    //V.previous = current
                    node.previous = current
                }
            }
            //on ajoute current dans closedList
            closedList.push(current)
        }
        //fin du programme (on a pas trouvé de chemin)

        return -1
    }
}

/**
 * @param {Array} openList 
 * @param {Graph} g 
 * @returns {String} node that has the minimum fscore (i.e heuristic)
 */
AStar.findMinFScoreAndRemoveItFromOpenList = function (openList, g) {
    let min = 0
    const nodes = g.getNodes()
    for (let i = 0; i < openList.length; i++) {
        if (nodes.get(openList[i]).fscore < nodes.get(openList[min]).fscore)
            min = i
    }

    return openList.splice(min, 1)[0]
}

/**
 * @param {String} V node to check presence 
 * @param {Array} list the array to check the presence of V
 * @returns {Number} index of the node inside the array
 */
AStar.isInList = function (V, list) {
    for (let i = 0; i < list.length; i++)
        if (list[i] == V)
            return i
    return -1
}

/**
 * Reconstructs a path reversely from a given node
 * @param {String} n the ending node
 * @param {Graph} g graph
 * @returns {Array} path
 */
AStar.reconstructPath = function (n, g) {
    const nodes = g.getNodes()
    let curr = nodes.get(n)
    const distanceTraveled = curr.cost
    const path = [curr.value]
    while (curr.previous != null) {
        curr = nodes.get(curr.previous)
        path.unshift(curr.value)
    }
    return { distanceTraveled, path }
}

module.exports = AStar