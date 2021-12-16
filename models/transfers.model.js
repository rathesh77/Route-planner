const Postgres = require('../db/Postgres')
const Stops = require('./stops.model')
class Transfers {
    /**
     * @param tableName {String}
     *  
     */
    static async getAll() {
        const result = await Postgres.client.query(
            `SELECT 
                t.from_stop_id,
                t.to_stop_id,
                s1.stop_lat as from_stop_lat,
                s1.stop_lon as from_stop_lon,
                s1.stop_name as from_stop_name,
                s1.stop_desc as from_stop_desc,

                s2.stop_lat as to_stop_lat,
                s2.stop_lon as to_stop_lon,
                s2.stop_name as to_stop_name,
                s2.stop_desc as to_stop_desc,
                min_transfer_time
             from 
                ${this.tableName} as t,
                stops as s1,
                stops as s2
                where 
                    s1.stop_id = t.from_stop_id
                    and s2.stop_id = t.to_stop_id
                `
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