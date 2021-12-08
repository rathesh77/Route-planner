const express = require('express')
const app = express()
const cors = require('cors')

const Dijkstra = require('./Dijkstra')
const Graph = require('./Graph')

const Postgres = require('./db/Postgres')
const StopTimes = require('./models/stop_times.model')
const Transfers = require('./models/transfers.model')
const Noeud = require('./Noeud')
const Stops = require('./models/stops.model')
app.use(cors())

let graph = new Graph()
let stations = {}
let computedPaths = new Map()
app.listen(8080, async () => {
    await Postgres.init()
    await buildTreeFromDeparture()
    //console.log(Dijkstra.shortestPath(1636, 1885, graph))
    console.log(graph.getNoeuds().get(2369))
    console.log('app started on port 8080');
})

app.get('/shortest_path/:departure/:destination',async (req, res) => {
    const departure = parseInt(req.params['departure'])
    const destination = parseInt(req.params['destination'])
    const time = Date.now()

    const {path, distanceTraveled} = Dijkstra.shortestPath(departure, destination, graph)
    const detailedPath = []
    for (const p of path){
        const {stop_id} = await Stops.findById(p)
        detailedPath.push(graph.getNoeuds().get(stop_id).getInfo())
    }
    console.log(`temps total :${((Date.now() - time)/1000) / 60} minute.s`)

    res.send({distanceTraveled, detailedPath })
})

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
async function buildTreeFromDeparture() {
    const stopTimes = await StopTimes.getAll()
    const transfers = await Transfers.getAll()
    let dictionary = new Map()
    for (const t of transfers)
    {
        const {from_stop_name, from_stop_desc, to_stop_name, to_stop_desc,from_stop_id, to_stop_id, from_stop_lat, from_stop_lon, to_stop_lat, to_stop_lon} = t
        const sourceInfo = {
            stop_name: from_stop_name,
            stop_desc: from_stop_desc,
            stop_lat: from_stop_lat,
            stop_lon: from_stop_lon
        }
        const destInfo = {
            stop_name: to_stop_name,
            stop_desc: to_stop_desc,
            stop_lat: to_stop_lat,
            stop_lon: to_stop_lon
        }
        graph.addPath(
            from_stop_id, 
            to_stop_id, 
            getDistanceFromLatLonInKm(from_stop_lat, from_stop_lon, to_stop_lat, to_stop_lon),
            sourceInfo,
            destInfo

        )
    }
    for (const st of stopTimes) {
        const {stop_id,stop_name, stop_desc,stop_lat, stop_lon} = st
        const sourceInfo = {
            stop_name: stop_name,
            stop_desc: stop_desc,
            stop_lat: stop_lat,
            stop_lon: stop_lon
        }
        const hasTrip = dictionary.has(st.trip_id)
        graph.addNoeud(stop_id, sourceInfo)

        if (hasTrip) {

            const trip = dictionary.get(st.trip_id)
            trip.set(st.stop_sequence, stop_id)
            const hasPreviousStop = trip.has(st.stop_sequence - 1)
            const hasNextStop = trip.has(st.stop_sequence + 1)
            if (hasNextStop) {
                const nextStop = trip.get(st.stop_sequence + 1)

                const destInfo = {
                    stop_name: nextStop.stop_name,
                    stop_desc: nextStop.stop_desc,
                    stop_lat: nextStop.stop_lat,
                    stop_lon: nextStop.stop_lon
                }
                graph.addPath(
                    stop_id, 
                    nextStop.stop_id, 
                    getDistanceFromLatLonInKm(st.stop_lat, st.stop_lon, nextStop.stop_lat, nextStop.stop_lon), 
                    sourceInfo, 
                    destInfo
                )
            }
            if (hasPreviousStop) {
                const previousStop = trip.get(st.stop_sequence - 1)

                const destInfo = {
                    stop_name: previousStop.stop_name,
                    stop_desc: previousStop.stop_desc,
                    stop_lat: previousStop.stop_lat,
                    stop_lon: previousStop.stop_lon
                }

                graph.addPath(
                    stop_id, 
                    previousStop.stop_id, 
                    getDistanceFromLatLonInKm(st.stop_lat, st.stop_lon, previousStop.stop_lat, previousStop.stop_lon),
                    sourceInfo, 
                    destInfo
                 )
            }
            dictionary.get(st.trip_id).set(st.stop_sequence, {stop_id, stop_name, stop_desc,stop_lat, stop_lon})

        } else {
            dictionary.set(st.trip_id, new Map())
            dictionary.get(st.trip_id).set(st.stop_sequence, {stop_id, stop_name, stop_desc, stop_lat, stop_lon})
        }
        
    }
}