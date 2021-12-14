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
            select
            st.trip_id,
            s.stop_id,
            s.stop_name,
            s.stop_desc,
            stop_lat,
            stop_lon,
            cts,
            st.stop_sequence,
            st.departure_time
        FROM
            (SELECT
                st.stop_id,
                min(st.trip_id) as trip_id,
                cts
            FROM
                stop_times as st,
                (
                SELECT
                    trip_id,
                    count(stop_id) as cts
                FROM
                    stop_times
                GROUP BY trip_id
                ORDER BY trip_id
                ) as sub
            WHERE st.trip_id = sub.trip_id
            GROUP BY st.stop_id, cts
            order by st.stop_id) as sub,
            stop_times as st,
            stops as s
        WHERE st.stop_id = sub.stop_id
        AND s.stop_id = st.stop_id
        AND st.trip_id = sub.trip_id
        ORDER BY trip_id, st.stop_sequence

            `
        )
        return result.rows
    }
    static async getStopsFollowingCurrentStopOnLongestTrip(stopId) {

        const result = await Postgres.client.query(
            `
            -- SELECTIONNE LE PLUS GRAND TRIP D'UNE STATION 
            SELECT
                s.stop_id,
                st.trip_id,
                s.stop_name,
                s.stop_lat,
                s.stop_lon,
                st.departure_time,
                st.stop_sequence,
                s2.stop_id as transfer_stop_id,
                s2.stop_lat as transfer_stop_lat,
                s2.stop_lon as transfer_stop_lon
            FROM
                stop_times AS st,
                stops AS s
                LEFT JOIN transfers AS f ON s.stop_id = f.from_stop_id
                LEFT JOIN stops as s2 on f.to_stop_id = s2.stop_id,
                (SELECT
                    _st.stop_id,
                    _st.trip_id,
                    count_stops
                FROM
                    stops AS _s,
                    stop_times AS _st,
                    (SELECT 
                        count(st.stop_id) as count_stops,
                        st.trip_id
                    FROM
                        (SELECT
                            trip_id
                        FROM
                            stop_times as st
                        WHERE st.stop_id = ${stopId}
                        GROUP BY
                            trip_id
                        ) AS sub,
                        stop_times as st
                    WHERE
                        st.trip_id = sub.trip_id
                    GROUP BY st.trip_id
                    ORDER BY count_stops DESC
                    LIMIT 1) AS sub
                WHERE
                    _s.stop_id = _st.stop_id
                    AND _s.stop_id = ${stopId}
                    AND sub.trip_id = _st.trip_id
                ) AS sub
            WHERE st.trip_id = sub.trip_id
            AND st.stop_id = s.stop_id
            ORDER BY stop_sequence;   
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