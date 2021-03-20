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
}
function travel(noeud) {
    let clone = noeud
    console.log(clone.distanceParcouru)
    if (!clone.stationsAdjacentes.length)
        return
    travel(clone.stationsAdjacentes[Math.floor(Math.random() * clone.stationsAdjacentes.length)])
}
function getMin(noeud, min, depth) {
    let cloneNoeud = noeud
    let cloneMin = min ? min : new Noeud(0, [])
    if (!cloneNoeud.stationsAdjacentes.length || !depth)
        return cloneMin.distanceParcouru < cloneNoeud.distanceParcouru ? cloneMin : cloneNoeud

    let newMin = cloneNoeud
    for (let i = 0; i < cloneNoeud.stationsAdjacentes.length; i++) {
        let minFromTree = getMin(cloneNoeud.stationsAdjacentes[i], cloneNoeud.distanceParcouru < cloneNoeud.stationsAdjacentes[i].distanceParcouru ? cloneNoeud : cloneNoeud.stationsAdjacentes[i], depth - 1)// Math.min(this.distanceParcouru,dist)
        newMin = newMin.distanceParcouru < minFromTree.distanceParcouru ? newMin : minFromTree
    }
    return newMin
}

function shortestPath(departure, destination) {

    let min = getMin(departure, null, 1);
    console.log(min)
    let newStationsAdjacentes = getStationsAdjacentesExceptMin(min, departure.stationsAdjacentes)
    console.log(newStationsAdjacentes)
}

function getStationsAdjacentesExceptMin(min, stations) {

    return stations.filter(s => s.distanceParcouru != min.distanceParcouru);
}


let root = new Noeud(788, [])
let n1 = new Noeud(728, [])
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

root.addStationAdjacente([n1, n2, n3])

//console.log(getMin(root, null, 200))
//travel(root)

shortestPath(root, null)
