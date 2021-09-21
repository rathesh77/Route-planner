const Graph = require('./Graph')
const Dijkstra = require('../Dijkstra')

let g = new Graph()
const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < nodes.length; i++)
    g.addNoeud(nodes[i].toString())

g.addPath('0', '1', 4)
g.addPath('0', '7', 8)
g.addPath('1', '7', 11)
g.addPath('1', '2', 8)
g.addPath('2', '3', 7)
g.addPath('3', '4', 9)
g.addPath('4', '5', 10)
g.addPath('5', '6', 2)
g.addPath('5', '3', 14)
g.addPath('6', '7', 1)
g.addPath('7', '8', 7)
g.addPath('6', '8', 6)
g.addPath('8', '2', 2)
g.addPath('2', '5', 4)



console.log(Dijkstra.shortestPath('0', '4', g))
