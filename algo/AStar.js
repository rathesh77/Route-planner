const Graph = require('./Graph')
/** Class representing the A* algorithm. */
class AStar {
    /**
     * @param {String} departure 
     * @param {String} arrival 
     * @param {Graph} graph
     * @returns {Object} { distanceTraveled, path }
     */
    static shortestPath(departure, arrival, g) {
        
        //on declare 2 tableaux : openlist et closedlist
        let openList = [], closedList = []
        //on ajoute departure à openlist
        g.getNodes().get(departure).cost = 0
        g.getNodes().get(departure).heuristic = 0

        openList.push(departure)
        //tant que open list n'est pas vide
        while (openList.length > 0) {
            //on trouve le noeud ayant la plus faible heuristic, et on le retire de openlist
            current = findMinFScoreAndRemoveItFromOpenList(openList, g)
            //si current est egal à arrival
            if (current == arrival) {
                //on reconstruit le chemin (chemin = reconstructPath(D, graph))
                //on arrête le programme car on a trouvé un chemin optimal (en retnournant le chemin)
                return Utils.reconstructPath(current, g)
            }
            //pour chaque voisin 'V' du noeud courant "current"
            const currentNode = g.getNodes().get(current)
            for (const [V, node] of currentNode.getNexts()) {
                if (Utils.isInList(V, closedList) != -1)
                    continue
                const indexOfVInsideOpenList = Utils.isInList(V, openList)
                const gscore = currentNode.cost + node.getHeads().get(V).weight
                const fscore = gscore + Utils.heuristic(V, arrival, g)
                //si V n'est pas dans closedList ET ( (V est dans openList ET openList(F(V)) > F(V)) OU V n'est pas dans openList)) 
                    //V.Cout = D.cout +  costBetweenDAndCurrent <- costBetweenDAndCurrent = temps qu'on prend pour aller de current vers V
                    //V.heuristic =  V.cout + hscore (V, arrival)
                    //V.previous = current
                    //on ajoute V à openList
                if (indexOfVInsideOpenList == -1) {
                    openList.push(V)
                    node.cost = gscore
                    node.fscore = fscore
                    node.previous = V
                } else if (openList[indexOfVInsideOpenList].cost > gscore) {
                    node.cost = gscore
                    node.fscore = fscore
                    node.previous = V
                }
            }
            //on ajoute current dans closedList
            closedList.push(current)
        }
        //fin du programme (on a pas trouvé de chemin)
        
        return 0
    }
    
}

/** Class representing helper functions for the A* algorithm */
class Utils {

    /**
     * @param {Array} openList 
     * @param {Graph} g 
     * @returns {String} node that has the minimum fscore (i.e heuristic)
     */
    static findMinFScoreAndRemoveItFromOpenList(openList, g) {
        let min = 0
        for (let i = 0; i < openList.length; i++) {
            if (g.getNodes().get(openList[i]).heuristic < g.getNodes().get(openList[min]).heuristic)
                min = i
        }

        return openList.splice(i, 1)
    }
    /**
     * @param {String} V node to check presence 
     * @param {Array} list the array to check the presence of V
     * @returns {Number} index of the node inside the array
     */
    static isInList(V, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == V)
                return i
        }
        return -1
    }

    /**
     * @param {String} n1 first node
     * @param {String} n2 second node
     * @param {Graph} g graph
     * @returns {Number} a safe estimate of the distance between n1 and n2
     */
    static heuristic(n1, n2, g) {
        return 0
    }

    /**
     * @param {String} n the ending node
     * @param {Graph} g graph
     * @returns {Array} the most optimal path
     */
    static reconstructPath(n, g) {
        let path = []
        let curr = g.getNodes().get(n)
        path.push(curr.value)
        while (curr.previous != null) {
            curr = g.getNodes().get(curr.previous)
            path.unshift(curr.value)
        }
        return path
    }
}
module.exports = AStar