const Postgres = require('../db/Postgres')
const Stops = require('./stops.model')
class Transfers {
    /**
     * @param tableName {String}
     *  
     */
    static async getAll() {
        const result = await Postgres.client.query(
            `SELECT * from ${this.tableName}`
        )
        return result.rows
    }
    static async getTransferByFromStop_id(fromStopId) {
        const result = await Postgres.client.query(
            `SELECT 
                s.stop_name,
                s.stop_id
             FROM 
                ${this.tableName},
                stops as s
            WHERE
                from_stop_id = ${fromStopId}
                AND s.stop_id = to_stop_id
            `
        )
        return result.rows
    }
}
/**
 *  @type {String}
 */
Transfers.tableName = 'transfers'

module.exports = Transfers