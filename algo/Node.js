
module.exports = class Node {
    /**
     * 
     * @param {String} value 
     */
    constructor(value, info) {
        /*
            heads format : [ 'heads.value' : {heads: stationheads, weight: 15} ]
        */
        this.heads = new Map()
        this.value = value
        this.info = info == undefined ? null : info
        this.nexts = new Map()
    }
    getHeads() {
        return this.heads
    }
    getValue() {
        return this.value
    }
    getInfo() {
        return this.info
    }
    getNexts() {
        return this.nexts
    }
    /**
     * 
     * @param {Node} node 
     * @param {Number} weight
     * @returns {Array<Node>}
     */
    addNext(node, weight) {
        node.getHeads().set(this.getValue(),{ heads: this, weight })
        this.nexts.set(node.getValue(), node)
        return this.nexts
    }
}

