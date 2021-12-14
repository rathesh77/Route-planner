const Dijkstra = require('../algo/Dijkstra')
const Graph = require('../algo/Graph')

let graph = new Graph()

graph.addPath('lognes', 'noisiel', 10)
graph.addPath('noisiel', 'bus1', 1)
graph.addPath('noisiel', 'bus2', 1)
graph.addPath('noisiel', 'bus3', 1)

graph.addPath( 'bus1','bus2' ,1)
graph.addPath( 'bus1','bus3' ,1)

graph.addPath( 'bus2','bus3' ,1)

graph.addPath('noisiel', 'nlg', 10)

console.log(Dijkstra.shortestPath('lognes', 'nlg', graph))