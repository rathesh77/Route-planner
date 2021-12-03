
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
    addNoeud(valeur) {
        if (this.noeuds.has(valeur)) {
            return this.noeuds.get(valeur)
        }
        const newNoeud = new Noeud(valeur)
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
    addPath(source, dest, poids) {
        if (!poids) {
            console.log('ajoutez un poids...')
            return
        }
        const sourceNoeud = this.addNoeud(source);
        const destinationNoeud = this.addNoeud(dest);

        sourceNoeud.addAdj(destinationNoeud, poids)
        destinationNoeud.addAdj(sourceNoeud, poids)

        return [sourceNoeud, destinationNoeud]
    }

}
