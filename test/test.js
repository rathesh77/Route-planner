const Dijkstra = require('../Dijkstra')
const graphExamples = require('../graph-examples.js')

let wikipediaExample = graphExamples[0]()
let codeForGeeksExample = graphExamples[1]()
let otherExample = graphExamples[2]()
let transportEnCommun = graphExamples[3]()

test('codeForGeeksExample', () => {
    expect(Dijkstra.shortestPath('0', '4', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["0", "7", "6", "5", "4"] })
    expect(Dijkstra.shortestPath('0', '5', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['0', '7', '6', '5'] })
    expect(Dijkstra.shortestPath('2', '2', codeForGeeksExample)).toStrictEqual('starting node and ending node are the same...')
    expect(Dijkstra.shortestPath('3', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['3', '2', '1', '0'] })
})

test('wikipediaExample', () => {
    expect(Dijkstra.shortestPath('E', 'I', wikipediaExample)).toStrictEqual({ distanceTraveled: 586, path: ['E', 'J', 'I'] })
    expect(Dijkstra.shortestPath('E', 'F', wikipediaExample)).toStrictEqual({ distanceTraveled: 338, path: ['E', 'A', 'B', 'F'] })
    expect(Dijkstra.shortestPath('A', 'J', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['A', 'C', 'H', 'J'] })
})

test('otherExample', () => {
    expect(Dijkstra.shortestPath('A', 'D', otherExample)).toStrictEqual({ distanceTraveled: 7, path: ['A', 'B', 'D'] })
    expect(Dijkstra.shortestPath('A', 'A', otherExample)).toStrictEqual('starting node and ending node are the same...')
    expect(Dijkstra.shortestPath('A', 'F', otherExample)).toStrictEqual({ distanceTraveled: 9, path: ['A', 'B', 'D', 'F'] })
})

test('transportEnCommun', () => {
    expect(Dijkstra.shortestPath('Auber', 'Sully-Morland', transportEnCommun)).toStrictEqual({ distanceTraveled: 14, path: ['Auber', 'Châtelet-Les Halles', 'Châtelet', 'Pont Marie', 'Sully-Morland'] })
    expect(Dijkstra.shortestPath('Châtelet-Les Halles', 'Pont Neuf', transportEnCommun)).toStrictEqual({ distanceTraveled: 6, path: ['Châtelet-Les Halles', 'Châtelet', 'Pont Neuf'] })
    expect(Dijkstra.shortestPath('Gare de Lyon', 'Auber', transportEnCommun)).toStrictEqual({ distanceTraveled: 7, path: ['Gare de Lyon', 'Châtelet-Les Halles', 'Auber'] })
})