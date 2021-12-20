const Graph = require('./Graph')
class AStar {
    /**
     * @param {String} departure 
     * @param {String} arrival 
     * @param {Graph} graph
     * @returns {Object} { distanceTraveled, path }
     */
    static shortestPath(departure, arrival, g) {
        /*
        on declare deux tableaux : openlist et closedlist
        on ajoute departure à openlist
        tant que open list n'est pas vide
            D = findMin_G_ScoreAndRemoveItFromOpenList(openList)
            si D est egal à arrival
                on reconstruit le chemin (chemin = reconstructPath(D, graph))
                on arrête le programme car on a trouvé un chemin optimal (en retnournant le chemin)
            pour chaque voisin 'V' du noeud courant "D"
                si V n'est pas dans closedList ET ( (V est dans openList ET openList(F(V)) > F(V)) OU V n'est pas dans openList)) 
                    V.Cout = nouveauCout <- on calculera ce nouveau cout en calculant le temps qu'on prend pour aller de D vers V
                    V.heuristic =  V.cout + heuristic (V, arrival)
                    V.previous = D
                    on ajoute V à openList
            on ajoute D dans closedList
        fin du programme (on a pas trouvé de chemin)
        */
        return 0
    }
    
}

module.exports = AStar