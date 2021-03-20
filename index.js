class Noeud {

    /**
     * 
     * @param {Number} distanceParcouru 
     * @param {Array<Noeud>} stationsAdjacentes 
     */
    constructor(distanceParcouru, stationsAdjacentes, stationName) {
        this.distanceParcouru = distanceParcouru;
        this.stationsAdjacentes = stationsAdjacentes;
        this.stationName = stationName
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
    console.log(clone.stationName)
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

function shortestPath(departure, destination, cache) {

    //console.log(cache)
    if (!departure)
        return "cette station n'existe pas"
    let from = departure
    if (from.stationName == destination)
        return from
    cache = detectDup(from.stationsAdjacentes,cache)
    from.stationsAdjacentes = everyStationComeFrom(from)
    from.stationsAdjacentes = from.stationsAdjacentes.concat(cache)
    
    let min = getMini(from.stationsAdjacentes);
    
        min.distanceParcouru += min.from.distanceParcouru
        //console.log("-----------------------")
    if (from.stationName == "F")
    console.log(from.stationsAdjacentes)
    let newStationsAdjacentes = getStationsAdjacentesExceptMin(min, from.stationsAdjacentes)
    return shortestPath(min, destination, newStationsAdjacentes)
}
function detectDup(from, cache) {
    for (let i = 0; i < cache.length; i++) {
        for (let j = 0; j < from.length; j++) {
            if (from[j].stationName == cache[i].stationName)
            {
               // console.log(from[j].distanceParcouru,cache[i].distanceParcouru)
                if ( from[j].distanceParcouru < cache[i].distanceParcouru)
                {
                    cache[i].distanceParcouru = from[j].distanceParcouru
                }
            }
    }
    }
    return cache
}
function getMini(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].distanceParcouru < min.distanceParcouru) {
            min = arr[i]
        }
    }
    return min
}
function everyStationComeFrom(from) {
    let clone = from
    for (let i = 0; i < clone.stationsAdjacentes.length; i++) {
        clone.stationsAdjacentes[i].from = from;
    }
    return clone.stationsAdjacentes
}
function getStationsAdjacentesExceptMin(min, stations) {

    let p = stations.filter(s => s.distanceParcouru != min.distanceParcouru);
    //console.log(p);
    return p
}

function graphFromArrayOfNode(arr) {
    if (!arr.length)
        return
    //console.log(arr)
    return new Noeud(arr[0].distanceParcouru, arr.slice(1), null)
}
/*
let root = new Noeud(788, [], "a")
let n1 = new Noeud(728, [], "b")
let n2 = new Noeud(578, [], "c")
let n3 = new Noeud(698, [], "d")

n1.addStationAdjacente(new Noeud(456, [new Noeud(459, [], "f"), new Noeud(698, [], "g"), new Noeud(700, [], "h")] , "e"))
n1.addStationAdjacente(new Noeud(485, [new Noeud(425, [], "j"), new Noeud(856, [], "k"), new Noeud(264, [], "l")], "i"))
n1.addStationAdjacente(new Noeud(369, [new Noeud(400, [], "n"), new Noeud(320, [new Noeud(296, [], "o"), new Noeud(296, [], "p")], "qwesh"), new Noeud(489, [])], "m"))

n2.addStationAdjacente(new Noeud(523, [new Noeud(300, [], "r"), new Noeud(278, [], "s"), new Noeud(264, [], "t")], "q"))
n2.addStationAdjacente(new Noeud(444, [new Noeud(268, [], "v"), new Noeud(639, [], "w"), new Noeud(221, [], "x")], "u"))
n2.addStationAdjacente(new Noeud(237, [new Noeud(298, [], "z"), new Noeud(666, [new Noeud(547, [], "aa"), new Noeud(852, [], "ab")], "ac"), new Noeud(456, [], "ad")], "y"))

n3.addStationAdjacente(new Noeud(894, [new Noeud(447, [], "af"), new Noeud(999, [], "ag"), new Noeud(589, [], "ah")], "ae"))
n3.addStationAdjacente(new Noeud(785, [new Noeud(288, [], "aj"), new Noeud(282, [], "ak"), new Noeud(247, [], "al")], "ai"))
n3.addStationAdjacente(new Noeud(547, [new Noeud(457, [], "an"), new Noeud(563, [new Noeud(389, [], "ao"), new Noeud(931, [], "ap")],"az"), new Noeud(546, [], "aq")], "am"))
*/

let root = new Noeud(0, [], "A")
let n1 = new Noeud(85, [], "B")
let n2 = new Noeud(217, [], "C")
let n3 = new Noeud(173, [], "E")

n1.addStationAdjacente(new Noeud(80, [new Noeud(250, [new Noeud(84, [], "J")], "I")], "F"))
n2.addStationAdjacente(new Noeud(186, [], "G"))
n2.addStationAdjacente(new Noeud(103, [new Noeud(183, [], "D"), new Noeud(167, [], "J")], "H"))

n3.addStationAdjacente(new Noeud(502, [], "J"))

root.addStationAdjacente([n1, n2, n3])

//console.log(getMin(root, null, 1))
//travel(root)
let dest = shortestPath(root, "J", [])
console.log(dest.stationName)
while ((dest = dest.from) != null) {
    console.log(dest.stationName)

}
