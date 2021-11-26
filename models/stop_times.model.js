const Postgres = require('../db/Postgres')

const Routes = require('./routes.model.js')
const Trips = require('./trips.model.js')
const Stops = require('./stops.model.js')

class StopTimes {
    /**
     * @param tableName {String}
     *  
     */
     static async getAll() {
        const result = await Postgres.client.query(
            `
            SELECT 
                r.route_short_name,
                r.route_long_name,
                t.trip_id,
                
                s.stop_name,
                
                st.stop_id, 
                st.departure_time,
                st.stop_sequence
            FROM 
                ${this.tableName} AS st, 
                ${Trips.tableName} as t,
                ${Routes.tableName} as r,
                ${Stops.tableName} as s,
                (SELECT
                    MIN(trip_id) AS trip_id, 
                    stop_id
                FROM 
                    ${this.tableName}
                GROUP BY stop_id
                ORDER BY trip_id) AS sub
            WHERE
                r.route_id = t.route_id
                AND t.trip_id = st.trip_id
                AND s.stop_id = st.stop_id
                AND st.stop_id = sub.stop_id
                AND st.trip_id = sub.trip_id
                AND r.route_long_name ILIKE '(CERGY-POISSY-SAINT GERMAIN EN LAYE <-> MARNE LA VALLEE-BOISSY SAINT LEGER) - Aller'
            `
        )
        return result.rows
    }
    static async getNextStopFromStopIdAndTripId(stopId, tripId, stopSequence) {
        const result = await Postgres.client.query(
            `
            SELECT
                stop_sequence,
                stops.stop_id,
                stops.stop_name
            FROM
                stop_times,
                stops
            WHERE
                (stop_sequence = ${stopSequence} + 1
                OR stop_sequence = ${stopSequence} - 1)
                AND stops.stop_id = stop_times.stop_id
                AND trip_id = ${tripId}

            `
        )
        return result.rows
    }

}

/**
 *  @type {String}
 */
 StopTimes.tableName = 'stop_times'

module.exports = StopTimes