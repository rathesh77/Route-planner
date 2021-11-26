const Noeud = require("./Noeud")

module.exports = class {
    /**
     * @param {String} depart 
     * @param {String} destination 
     * @param {Graph} graph
     * @returns {Object} { distanceTraveled, path }
     */
    static shortestPath(depart, destination, graph) {

        if (!depart || !destination) {
            return 'you need to specify two nodes'
        }

        if (depart == destination) {
            return 'starting node and ending node are the same...'
        }
        if (!graph.getNoeuds().get(depart) || !graph.getNoeuds().get(destination)) {
            return 'starting node or ending node not found...'
        }

        let memoire = new Map()
        let initialNode = depart
        let totalDistance = 0
        let precedent = depart
        let fullPath = new Map()

        while (depart != destination) {
            let temp = new Map()
            let noeudsAdjacents = graph.getNoeuds().get(depart).getAdj()
            let distanceMin = noeudsAdjacents.values().next().value.getTete().get(depart).poids + totalDistance
            let prochainNoeudAPrendre = noeudsAdjacents.values().next().value.valeur
            for (const noeud of noeudsAdjacents) {
                let prochaineDistance = noeud.getTete().get(depart).poids + totalDistance
                let prochainNoeud = noeud.valeur
                if (prochainNoeud == precedent) {
                    continue
                }
                if (memoire.has(prochainNoeud)) {

                    if (memoire.get(prochainNoeud).distanceParcouru > prochaineDistance) {
                        memoire.get(prochainNoeud).distanceParcouru = prochaineDistance
                        memoire.get(prochainNoeud).depuis = depart
                    }
                    continue
                }
                if (prochaineDistance < distanceMin) {
                    prochainNoeudAPrendre = prochainNoeud
                    distanceMin = prochaineDistance
                }

                temp.set(prochainNoeud, { distanceParcouru: prochaineDistance, depuis: depart })
            }
            precedent = depart

            for (const [fin, debut] of memoire) {
                let prochaineDistance = debut.distanceParcouru
                let prochainNoeud = fin

                if (prochaineDistance < distanceMin) {
                    prochainNoeudAPrendre = prochainNoeud
                    distanceMin = prochaineDistance
                    precedent = debut.depuis
                }
            }

            memoire = new Map([...memoire, ...temp])


            if (memoire.has(prochainNoeudAPrendre)) {
                memoire.delete(prochainNoeudAPrendre)
            }

            depart = prochainNoeudAPrendre
            totalDistance = distanceMin

            if (!fullPath.has(prochainNoeudAPrendre))
                fullPath.set(prochainNoeudAPrendre, precedent)
            // repeter...

        }
        //console.log(fullPath)

        let path = [graph.getNoeuds().get(destination).getValeur()]

        let end = destination
        while (end != initialNode) {
            end = fullPath.get(end)
            path.unshift(graph.getNoeuds().get(end).getValeur())
        }
        
        return { distanceTraveled: totalDistance, path }
    }

}