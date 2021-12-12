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
    console.log(graph.getNoeuds().get(2129))
    console.log('app started on port 8080');
})

app.get('/shortest_path/:departure/:destination', async (req, res) => {
    const departure = parseInt(req.params['departure'])
    const destination = parseInt(req.params['destination'])
    console.log(departure, destination)
    if (!graph.getNoeuds().has(departure) || !graph.getNoeuds().has(destination)) {
        res.send({ error: 'starting or ending stop not found' })
        return
    }
    const time = Date.now()

    const { path, distanceTraveled } = Dijkstra.shortestPath(departure, destination, graph)
    console.log(path)
    if (path == undefined) {
        res.send({ error: 'error' })
        return
    }
    const detailedPath = []
    for (const p of path) {
        const { stop_id } = await Stops.findById(p)
        detailedPath.push(graph.getNoeuds().get(stop_id).getInfo())
    }
    console.log(`temps total :${((Date.now() - time) / 1000) / 60} minute.s`)

    res.send({ distanceTraveled, detailedPath })
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
    let dictionary = new Map()
   
    for (const st of stopTimes) {
        const { stop_id, stop_name, stop_desc, stop_lat, stop_lon } = st
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
            const hasPreviousStop = trip.has(st.stop_sequence - 1)
            const hasNextStop = trip.has(st.stop_sequence + 1)
            if (hasNextStop) {
                //console.log('next stop')
                const nextStop = trip.get(st.stop_sequence + 1)

                const destInfo = {
                    stop_name: nextStop.stop_name,
                    stop_desc: nextStop.stop_desc,
                    stop_lat: nextStop.stop_lat,
                    stop_lon: nextStop.stop_lon,
                    departure_time: nextStop.time

                }
                graph.addPath(
                    stop_id,
                    nextStop.stop_id,
                    Math.abs(getSecondsFromLocalTime(destInfo.departure_time) - getSecondsFromLocalTime(st.departure_time)) ,
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
                    stop_lon: previousStop.stop_lon,
                    departure_time: previousStop.time
                }
                //console.log(Math.abs(getSecondsFromLocalTime(destInfo.departure_time) - getSecondsFromLocalTime(st.departure_time)))
                graph.addPath(
                    stop_id,
                    previousStop.stop_id,
                    Math.abs(getSecondsFromLocalTime(destInfo.departure_time) - getSecondsFromLocalTime(st.departure_time)),
                    sourceInfo,
                    destInfo
                )
            }
            trip.set(st.stop_sequence, { stop_id, stop_name, stop_desc, stop_lat, stop_lon, time: st.departure_time })

        } else {
            dictionary.set(st.trip_id, new Map())
            dictionary.get(st.trip_id).set(st.stop_sequence, { stop_id, stop_name, stop_desc, stop_lat, stop_lon, time: st.departure_time })
        }

    }
}


function getSecondsFromLocalTime(time){
    //console.log(time)
    return time.split(':').reduce((a, b, i) => i == 0 ? (+b * 3600) : i == 1 ? (a + (+b * 60)) : (+a + +b), 0)

}