const Dijkstra = require('../Dijkstra')
const graphExamples = require('../graph-examples.js')

let wikipediaExample = graphExamples[0]
let codeForGeeksExample = graphExamples[1]
let otherExample = graphExamples[2]

test('codeForGeeksExample', () => {
    expect(Dijkstra.shortestPath('0', '4', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 21, path: ["0", "7", "6", "5", "4"] })
    expect(Dijkstra.shortestPath('0', '5', codeForGeeksExample)).toStrictEqual({ distanceTraveled: 11, path: ['0', '7', '6', '5'] })
})

test('wikipediaExample', () => {
    expect(Dijkstra.shortestPath('E', 'I', wikipediaExample)).toStrictEqual({ distanceTraveled: 586, path: ['E', 'J', 'I'] })
    expect(Dijkstra.shortestPath('E', 'F', wikipediaExample)).toStrictEqual({ distanceTraveled: 338, path: ['E', 'A', 'B', 'F'] })
    expect(Dijkstra.shortestPath('A', 'J', wikipediaExample)).toStrictEqual({ distanceTraveled: 487, path: ['A', 'C', 'H', 'J'] })
})

test('otherExample', () => {
    expect(Dijkstra.shortestPath('A', 'D', otherExample)).toStrictEqual({ distanceTraveled: 7, path: ['A', 'B', 'D'] })
    expect(Dijkstra.shortestPath('A', 'F', otherExample)).toStrictEqual({ distanceTraveled: 9, path: ['A', 'B', 'D','F'] })

})