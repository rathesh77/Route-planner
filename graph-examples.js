
const Graph = require('./Graph')
let wikipediaExample = function () {

    let g = new Graph()
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    for (let i = 0; i < nodes.length; i++)
        g.addNoeud(nodes[i])

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

let codeForGeeksExample = function () {

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

let otherExample = function () {

    let g = new Graph()
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i = 0; i < nodes.length; i++)
        g.addNoeud(nodes[i])

    g.addPath('A', 'B', 3)
    g.addPath('A', 'D', 9)
    g.addPath('A', 'C', 5)
    g.addPath('B', 'C', 3)
    g.addPath('B', 'D', 4)
    g.addPath('B', 'E', 7)
    g.addPath('C', 'E', 6)
    g.addPath('C', 'D', 2)
    g.addPath('C', 'F', 8)
    g.addPath('E', 'D', 2)
    g.addPath('E', 'F', 5)
    g.addPath('D', 'F', 2)
    
    return g

}

let transportEnCommun = function () {
    let g = new Graph()
    const nodes = ['Auber', 'Châtelet-Les Halles', 'Gare de Lyon', 'Pont Neuf', 'Châtelet', 'Pont Marie', 'Sully-Morland']
    for (let i = 0; i < nodes.length; i++)
        g.addNoeud(nodes[i])
    g.addPath('Auber', 'Châtelet-Les Halles', 3)
    g.addPath('Châtelet-Les Halles', 'Gare de Lyon', 4)
    g.addPath('Châtelet-Les Halles', 'Châtelet', 2)
    g.addPath('Pont Neuf', 'Châtelet', 4)
    g.addPath('Châtelet', 'Pont Marie', 5)
    g.addPath('Pont Marie', 'Sully-Morland', 4)

    return g
}


module.exports = [wikipediaExample,codeForGeeksExample, otherExample, transportEnCommun]
