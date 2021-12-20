const AStar = require('../algo/AStar')
const graphExamples = require('./graph-examples.js')

let wikipediaExample = graphExamples[0]()
let codeForGeeksExample = graphExamples[1]()
let otherExample = graphExamples[2]()
let transportEnCommun = graphExamples[3]()

test('codeForGeeksExample', () => {
    expect(AStar.shortestPath('0', '4', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["0", "7", "6", "5", "4"] })
    expect(AStar.shortestPath('0', '5', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['0', '7', '6', '5'] })
    expect(AStar.shortestPath('0', '8', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 14, path: ['0', '1', '2', '8'] })
    expect(AStar.shortestPath('0', '7', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 8, path: ['0', '7'] })
    expect(AStar.shortestPath('0', '1', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 4, path: ['0', '1'] })
    expect(AStar.shortestPath('2', '2', codeForGeeksExample)).toStrictEqual('starting node and ending node are the same...')
    expect(AStar.shortestPath('3', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['3', '2', '1', '0'] })
    expect(AStar.shortestPath('0', '2', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 12, path: ['0', '1', '2'] })
    expect(AStar.shortestPath('0', '3', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['0', '1', '2', '3'] })
    expect(AStar.shortestPath('0', '6', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 9, path: ['0', '7', '6'] })

    expect(AStar.shortestPath('4', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["4", "5", "6", "7", "0",] })
    expect(AStar.shortestPath('5', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['5' , '6','7','0'] })
    expect(AStar.shortestPath('8', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 14, path: ['8', '2','1','0'] })
    expect(AStar.shortestPath('7', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 8, path: ['7', '0'] })
    expect(AStar.shortestPath('1', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 4, path: ['1', '0'] })
    expect(AStar.shortestPath('2', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 12, path: ['2','1','0'] })
    expect(AStar.shortestPath('3', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 19, path: ['3','2','1','0'] })
    expect(AStar.shortestPath('6', '0', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 9, path: ['6','7','0'] })
})

test('wikipediaExample', () => {
    expect(AStar.shortestPath('E', 'I', wikipediaExample)).toStrictEqual({ distanceTraveled: 586, path: ['E', 'J', 'I'] })
    expect(AStar.shortestPath('E', 'F', wikipediaExample)).toStrictEqual({ distanceTraveled: 338, path: ['E', 'A', 'B', 'F'] })
    expect(AStar.shortestPath('A', 'J', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['A', 'C', 'H', 'J'] })
    expect(AStar.shortestPath('J', 'A', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['J', 'H', 'C', 'A'] })
})

test('otherExample', () => {
    expect(AStar.shortestPath('A', 'D', otherExample)).toStrictEqual({ distanceTraveled: 7, path: ['A', 'C', 'D'] })
    expect(AStar.shortestPath('A', 'A', otherExample)).toStrictEqual('starting node and ending node are the same...')
    expect(AStar.shortestPath('A', 'F', otherExample)).toStrictEqual({ distanceTraveled: 9, path: ['A', 'C', 'D', 'F'] })
})

test('transportEnCommun', () => {
    expect(AStar.shortestPath('Auber', 'Sully-Morland', transportEnCommun)).toStrictEqual({ distanceTraveled: 14, path: ['Auber', 'Châtelet-Les Halles', 'Châtelet', 'Pont Marie', 'Sully-Morland'] })
    expect(AStar.shortestPath('Châtelet-Les Halles', 'Pont Neuf', transportEnCommun)).toStrictEqual({ distanceTraveled: 6, path: ['Châtelet-Les Halles', 'Châtelet', 'Pont Neuf'] })
    expect(AStar.shortestPath('Gare de Lyon', 'Auber', transportEnCommun)).toStrictEqual({ distanceTraveled: 7, path: ['Gare de Lyon', 'Châtelet-Les Halles', 'Auber'] })
    expect(AStar.shortestPath( 'Pont Marie','Gare de Lyon', transportEnCommun)).toStrictEqual({ distanceTraveled: 11, path: [ 'Pont Marie','Châtelet','Châtelet-Les Halles','Gare de Lyon'] })
    expect(AStar.shortestPath( 'Auber','Pont Neuf', transportEnCommun)).toStrictEqual({ distanceTraveled: 9, path: [ 'Auber','Châtelet-Les Halles','Châtelet','Pont Neuf'] })


})