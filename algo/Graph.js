
const Noeud = require('./Noeud')

module.exports = class Graph {

    constructor() {

        this.noeuds = new Map()
    }
    getNoeuds() {
        return this.noeuds
    }
    /**
     * 
     * @param {String} valeur 
     * @returns {Noeud}
     */
    addNoeud(valeur, info) {
        if (this.noeuds.has(valeur)) {
            this.noeuds.get(valeur).info = info
            return this.noeuds.get(valeur)
        }
        const newNoeud = new Noeud(valeur, info)
        this.noeuds.set(valeur, newNoeud)
        return newNoeud
    }
    
    /**
     * 
     * @param {String} source 
     * @param {String} dest 
     * @param {Number} poids 
     * @returns {Array}
     */
    addPath(source, dest, poids, sourceInfo, destInfo) {
        //console.log(source, dest, poids, sourceInfo, destInfo)
        if (poids == null) {
            console.log('ajoutez un poids...')
            return
        }
        const sourceNoeud = this.addNoeud(source, sourceInfo);
        const destinationNoeud = this.addNoeud(dest, destInfo);

        sourceNoeud.addAdj(destinationNoeud, poids)
        destinationNoeud.addAdj(sourceNoeud, poids)

        return [sourceNoeud, destinationNoeud]
    }

}
