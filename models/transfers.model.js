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
            subq.from_stop_id, 
            subq.to_stop_id, 
            r1.route_short_name as from_route_short_name,
            r2.route_short_name as to_route_short_name,
        
            subq.from_stop_lat,
            subq.from_stop_lon,
            subq.from_stop_name,
            subq.from_stop_desc,
            
            subq.to_stop_lat,
            subq.to_stop_lon,
            subq.to_stop_name,
            subq.to_stop_desc,
            subq.min_transfer_time
        
        FROM
            (SELECT 
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
                transfers as t,
                stops as s1,
                stops as s2
            where 
                s1.stop_id = t.from_stop_id
                and s2.stop_id = t.to_stop_id) as subq,
            (SELECT stop_id, min(trip_id) as trip_id FROM stop_times group by stop_id) as st1, 
            trips as t1, 
            routes as r1,
            
            (SELECT stop_id, min(trip_id)as trip_id  FROM stop_times group by stop_id) as st2, 
            trips as t2, 
            routes as r2
        WHERE
            subq.from_stop_id = st1.stop_id
            AND st1.trip_id = t1.trip_id
            AND t1.route_id = r1.route_id
            
            AND	subq.to_stop_id = st2.stop_id
            AND st2.trip_id = t2.trip_id
            AND t2.route_id = r2.route_id
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