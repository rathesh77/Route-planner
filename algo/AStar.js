const Graph = require('./Graph')
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
            current = findMinFScoreAndRemoveItFromOpenList(openList)
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
                const fscore = currentNode.cost + Utils.heuristic(V, arrival, g)
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

class Utils {

    static isInList(V, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == V)
                return i
        }
        return -1
    }

    static heuristic(n1, n2, g) {
        return 0
    }

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