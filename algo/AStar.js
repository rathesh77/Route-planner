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
    static shortestPath(departure, arrival, g) {
        if (departure == arrival)
            return 'starting node and ending node are the same...'
        //on declare 2 tableaux : openlist et closedlist
        let openList = [], closedList = [], visitedNodes = []
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
            visitedNodes.push(current)
            //si current est egal à arrival
            if (current == arrival) {
                //on reconstruit le chemin (chemin = reconstructPath(D, graph))
                //on arrête le programme car on a trouvé un chemin optimal (en retnournant le chemin)
                const path = AStar.reconstructPath(current, g)
                for (const n of visitedNodes) {
                    const node = nodes.get(n)
                    node.cost = null
                    node.fscore = null
                    node.previous = null
                }
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
                const fscore = gscore + AStar.heuristic(V, arrival, g)
                //console.log(current, currentNode.cost, V, gscore, indexOfVInsideOpenList)
                //si V n'est pas dans closedList ET ( (V est dans openList ET openList(F(V)) > F(V)) OU V n'est pas dans openList)) 
                //V.Cout = D.cout +  costBetweenDAndCurrent <- costBetweenDAndCurrent = temps qu'on prend pour aller de current vers V
                //V.heuristic =  V.cout + hscore (V, arrival)
                //V.previous = current
                //on ajoute V à openList
                // Si V n'est pas dans openList OU V est dans openList avec un cout inferieur à celui precedemment calculé depuis un autre noeud predecesseur
                if (indexOfVInsideOpenList == -1) {
                    // On l'ajoute V dans openList
                    openList.push(V)
                    // On met à jour le cout total pris pour arriver au noeud V
                    node.cost = gscore
                    // On met à jour l'heuristic (i.e le cout total + une estimation de la distance entre V et le noeud final)
                    node.fscore = fscore
                    // On met à jour le noeud precedent
                    node.previous = current
                } else if (nodes.get(openList[indexOfVInsideOpenList]).cost > gscore) {
                    node.cost = gscore
                    node.fscore = fscore
                    node.previous = current
                }
                visitedNodes.push(V)
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

// TODO
/**
 * @param {String} n1 first node
 * @param {String} n2 second node
 * @param {Graph} g graph
 * @returns {Number} a safe estimate of the distance between n1 and n2
 */
AStar.heuristic = function (n1, n2, g) {
    return 0
}

/**
 * Reconstructs a path reversely from a given node
 * @param {String} n the ending node
 * @param {Graph} g graph
 * @returns {Array} path
 */
AStar.reconstructPath = function (n, g) {
    let path = []
    const nodes = g.getNodes()
    let curr = nodes.get(n)
    const distanceTraveled = curr.cost
    path.push(curr.value)
    while (curr.previous != null) {
        curr = nodes.get(curr.previous)
        path.unshift(curr.value)
    }
    return { distanceTraveled, path }
}

module.exports = AStar