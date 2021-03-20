class Noeud {

    /**
     * 
     * @param {Number} distanceParcouru 
     * @param {Array<Noeud>} stationsAdjacentes 
     */
    constructor(distanceParcouru, stationsAdjacentes) {
        this.distanceParcouru = distanceParcouru;
        this.stationsAdjacentes = stationsAdjacentes;
    }
    /**
     * 
     * @param {Array<Noeud>} stationsAdjacentes 
     */
    addStationAdjacente(stationsAdjacentes) {
        this.stationsAdjacentes = this.stationsAdjacentes.concat(stationsAdjacentes)
    }


    travel(noeud) {
        let clone = noeud ? noeud : this
        console.log(clone.distanceParcouru)
        if (!clone.stationsAdjacentes.length)
            return
        this.travel(clone.stationsAdjacentes[Math.floor(Math.random() * clone.stationsAdjacentes.length)])
    }
    getMin(noeud, min,depth) {
        let cloneNoeud = noeud ? noeud : this
        let cloneMin = min ? min : this.distanceParcouru
        if (!cloneNoeud.stationsAdjacentes.length || !depth)
            return Math.min(cloneMin, cloneNoeud.distanceParcouru)
        let newMin = this.distanceParcouru
        for (let i = 0; i < cloneNoeud.stationsAdjacentes.length; i++) {
            let minFromTree = this.getMin(cloneNoeud.stationsAdjacentes[i], Math.min(cloneNoeud.distanceParcouru, this.distanceParcouru),depth-1)// Math.min(this.distanceParcouru,dist)
            newMin = minFromTree == undefined ? this.distanceParcouru : Math.min(newMin, minFromTree)
        }
        return newMin

    }
    

}

function shortestPath(departure, destination) {

    let stationsAdjacentes = departure.stationsAdjacentes
    console.log(departure.getMin(null,null,1))
    
}



let root = new Noeud(788, [])
let n1 = new Noeud(478, [])
let n2 = new Noeud(578, [])
let n3 = new Noeud(698, [])

n1.addStationAdjacente(new Noeud(456, [new Noeud(459, []), new Noeud(698, []), new Noeud(700, [])]))
n1.addStationAdjacente(new Noeud(485, [new Noeud(425, []), new Noeud(856, []), new Noeud(264, [])]))
n1.addStationAdjacente(new Noeud(369, [new Noeud(400, []), new Noeud(320, [new Noeud(296, []), new Noeud(296, [])]), new Noeud(489, [])]))

n2.addStationAdjacente(new Noeud(523, [new Noeud(300, []), new Noeud(278, []), new Noeud(264, [])]))
n2.addStationAdjacente(new Noeud(444, [new Noeud(268, []), new Noeud(639, []), new Noeud(221, [])]))
n2.addStationAdjacente(new Noeud(237, [new Noeud(298, []), new Noeud(666, [new Noeud(547, []), new Noeud(852, [])]), new Noeud(456, [])]))

n3.addStationAdjacente(new Noeud(894, [new Noeud(447, []), new Noeud(999, []), new Noeud(589, [])]))
n3.addStationAdjacente(new Noeud(785, [new Noeud(288, []), new Noeud(282, []), new Noeud(247, [])]))
n3.addStationAdjacente(new Noeud(547, [new Noeud(457, []), new Noeud(563, [new Noeud(389, []), new Noeud(931, [])]), new Noeud(546, [])]))

root.addStationAdjacente([n1, n2,n3])

//console.log(root.getMin(null,null,2))
//root.travel()

shortestPath(root,null)

















/*travel() {
        console.log(this.distanceParcouru)
        if (!this.stationsAdjacentes.length)
            return
        this.stationsAdjacentes[Math.floor(Math.random() * this.stationsAdjacentes.length)].travel()
    }
    getMin(dist) {
        if (!this.stationsAdjacentes.length)
            return Math.min(dist,this.distanceParcouru)
        for (let i = 0; i < this.stationsAdjacentes.length; i++) {
            console.log(this.stationsAdjacentes[i].getMin(this.distanceParcouru)) // Math.min(this.distanceParcouru,dist)

        }
    }
*/