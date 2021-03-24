const Station = require('./Station')
const Graph = require('./Graph')

module.exports.wikipediaExample = function () {
    let first = new Station(0, [], "A")
    let n1 = new Station(85, [], "B")
    let n2 = new Station(217, [], "C")
    let n3 = new Station(173, [], "E")

    n1.addAdjacentStation(new Station(80, [new Station(250, [new Station(84, [], "J")], "I")], "F"))
    n2.addAdjacentStation(new Station(186, [], "G"))
    n2.addAdjacentStation(new Station(103, [new Station(183, [], "D"), new Station(167, [], "J")], "H"))
    n3.addAdjacentStation(new Station(502, [], "J"))


    first.addAdjacentStation([n1, n2, n3])
    return first
}
module.exports.example1 = function () {
    let first = new Station(788, [], "a")
    let n1 = new Station(728, [], "b")
    let n2 = new Station(578, [], "c")
    let n3 = new Station(698, [], "d")

    n1.addAdjacentStation(new Station(456, [new Station(459, [], "f"), new Station(698, [], "g"), new Station(700, [], "h")], "e"))
    n1.addAdjacentStation(new Station(485, [new Station(425, [], "j"), new Station(856, [], "k"), new Station(264, [], "l")], "i"))
    n1.addAdjacentStation(new Station(369, [new Station(400, [], "n"), new Station(320, [new Station(296, [], "o"), new Station(296, [], "p")], "qwesh"), new Station(489, [])], "m"))

    n2.addAdjacentStation(new Station(523, [new Station(300, [], "r"), new Station(278, [], "s"), new Station(264, [], "t")], "q"))
    n2.addAdjacentStation(new Station(444, [new Station(268, [], "v"), new Station(639, [], "w"), new Station(221, [], "x")], "u"))
    n2.addAdjacentStation(new Station(237, [new Station(298, [], "z"), new Station(666, [new Station(547, [], "aa"), new Station(852, [], "ab")], "ac"), new Station(456, [], "ad")], "y"))

    n3.addAdjacentStation(new Station(894, [new Station(447, [], "af"), new Station(999, [], "ag"), new Station(589, [], "ah")], "ae"))
    n3.addAdjacentStation(new Station(785, [new Station(288, [], "aj"), new Station(282, [], "ak"), new Station(247, [], "al")], "ai"))
    n3.addAdjacentStation(new Station(547, [new Station(457, [], "an"), new Station(563, [new Station(389, [], "ao"), new Station(931, [], "ap")], "az"), new Station(546, [], "aq")], "am"))
    first.addAdjacentStation([n1, n2, n3])
    return first
}

module.exports.example2 = function () {

    let g = new Graph()
    g.addPath(new Station(0,[],"0"), new Station(4,[],"1"))
    g.addPath(new Station(4,[],"1"), new Station(11,[],"7"))
    g.addPath(new Station(4,[],"1"), new Station(8,[],"2"))

    g.addPath(new Station(8,[],"7"), new Station(7,[],"8"))
    g.addPath(new Station(8,[],"7"), new Station(1,[],"6"))
    g.addPath(new Station(1,[],"6"), new Station(6,[],"8"))
    g.addPath(new Station(6,[],"8"), new Station(2,[],"2"))
    g.addPath(new Station(8,[],"2"), new Station(7,[],"3"))
    g.addPath(new Station(8,[],"2"), new Station(4,[],"5"))
    g.addPath(new Station(7,[],"3"), new Station(14,[],"5"))
    g.addPath(new Station(7,[],"3"), new Station(9,[],"4"))
    g.addPath(new Station(1,[],"6"), new Station(2,[],"5"))


    //console.log(g.stations)
    return g
}