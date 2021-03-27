const Dijkstra = require('../Dijkstra')
const graphExamples = require('../graph-examples.js')

let wikipediaExample = graphExamples[0]()
let codeForGeeksExample = graphExamples[1]()
let otherExample = graphExamples[2]()
let transportEnCommun = graphExamples[3]()

test('codeForGeeksExample', () => {
    expect(Dijkstra.shortestPath('0', '4', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["0", "7", "6", "5", "4"] })
    expect(Dijkstra.shortestPath('0', '5', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['0', '7', '6', '5'] })
    expect(Dijkstra.shortestPath('0', '8', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 14, path: ['0', '1', '2', '8'] })
    expect(Dijkstra.shortestPath('0', '7', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 8, path: ['0', '7'] })
    expect(Dijkstra.shortestPath('0', '1', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 4, path: ['0', '1'] })
    expect(Dijkstra.shortestPath('2', '2', codeForGeeksExample)).toStrictEqual('starting node and ending node are the same...')
    expect(Dijkstra.shortestPath('3', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['3', '2', '1', '0'] })
    expect(Dijkstra.shortestPath('0', '2', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 12, path: ['0', '1', '2'] })
    expect(Dijkstra.shortestPath('0', '3', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['0', '1', '2', '3'] })
    expect(Dijkstra.shortestPath('0', '6', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 9, path: ['0', '7', '6'] })

    expect(Dijkstra.shortestPath('4', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["4", "5", "6", "7", "0",] })
    expect(Dijkstra.shortestPath('5', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['5' , '6','7','0'] })
    expect(Dijkstra.shortestPath('8', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 14, path: ['8', '2','1','0'] })
    expect(Dijkstra.shortestPath('7', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 8, path: ['7', '0'] })
    expect(Dijkstra.shortestPath('1', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 4, path: ['1', '0'] })
    expect(Dijkstra.shortestPath('2', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 12, path: ['2','1','0'] })
    expect(Dijkstra.shortestPath('3', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['3','2','1','0'] })
    expect(Dijkstra.shortestPath('6', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 9, path: ['6','7','0'] })
})

test('wikipediaExample', () => {
    expect(Dijkstra.shortestPath('E', 'I', wikipediaExample)).toStrictEqual({ distanceTraveled: 586, path: ['E', 'J', 'I'] })
    expect(Dijkstra.shortestPath('E', 'F', wikipediaExample)).toStrictEqual({ distanceTraveled: 338, path: ['E', 'A', 'B', 'F'] })
    expect(Dijkstra.shortestPath('A', 'J', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['A', 'C', 'H', 'J'] })
    expect(Dijkstra.shortestPath('J', 'A', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['J', 'H', 'C', 'A'] })
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
    expect(Dijkstra.shortestPath( 'Pont Marie','Gare de Lyon', transportEnCommun)).toStrictEqual({ distanceTraveled: 11, path: [ 'Pont Marie','Châtelet','Châtelet-Les Halles','Gare de Lyon'] })
    expect(Dijkstra.shortestPath( 'Auber','Pont Neuf', transportEnCommun)).toStrictEqual({ distanceTraveled: 9, path: [ 'Auber','Châtelet-Les Halles','Châtelet','Pont Neuf'] })


})