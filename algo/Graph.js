
const Node = require('./Node')

module.exports = class Graph {

    constructor() {

        this.nodes = new Map()
    }
    getNodes() {
        return this.nodes
    }
    /**
     * 
     * @param {String} value 
     * @returns {Node}
     */
    addNode(value, info) {
        if (this.nodes.has(value)) {
            this.nodes.get(value).info = info
            return this.nodes.get(value)
        }
        const newNode = new Node(value, info)
        this.nodes.set(value, newNode)
        return newNode
    }
    
    /**
     * 
     * @param {String} source 
     * @param {String} dest 
     * @param {Number} weight 
     * @returns {Array}
     */
    addPath(source, dest, weight, sourceInfo, arrivalInfo) {
        //console.log(source, dest, weight, sourceInfo, arrivalInfo)
        if (weight == null) {
            console.log('ajoutez un weight...')
            return
        }
        const sourceNode = this.addNode(source, sourceInfo);
        const arrivalNode = this.addNode(dest, arrivalInfo);

        sourceNode.addNext(arrivalNode, weight)
        arrivalNode.addNext(sourceNode, weight)

        return [sourceNode, arrivalNode]
    }

}
