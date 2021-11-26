
module.exports = class Noeud {
    /**
     * 
     * @param {String} valeur 
     */
    constructor(valeur, info) {
        /*
            tete format : [ 'tete.valeur' : {tete: stationHead, poids: 15} ]
        */
        this.tete = new Map()
        this.valeur = valeur
        this.info = info == undefined ? null : info
        this.adj = []
    }
    getTete() {
        return this.tete
    }
    getValeur() {
        return this.valeur
    }
    getAdj() {
        return this.adj
    }
    /**
     * 
     * @param {Noeud} noeud 
     * @param {Number} poids
     * @returns {Array<Noeud>}
     */
    addAdj(noeud, poids) {
        noeud.getTete().set(this.getValeur(),{ tete: this, poids })
        this.adj.push(noeud)
        return this.adj
    }
}

