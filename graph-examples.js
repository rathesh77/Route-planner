
const Graph = require('./Graph')

module.exports.wikipediaExample = function () {

    let g = new Graph()
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    for (let i = 0; i < nodes.length; i++)
        g.addNoeud(nodes[i].toString())


    g.addPath('A', 'B', 85)
    g.addPath('B', 'F', 80)
    g.addPath('F', 'I', 250)
    g.addPath('I', 'J', 84)
    g.addPath('A', 'E', 173)
    g.addPath('E', 'J', 502)
    g.addPath('A', 'C', 217)
    g.addPath('C', 'G', 186)
    g.addPath('C', 'H', 103)
    g.addPath('H', 'D', 183)
    g.addPath('H', 'J', 167)

    return g
}

module.exports.codeForGeeksExample = function () {

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

    return g

}