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
    await buildTreeFromDeparture(1636)
    console.log(graph)
    console.log('app started on port 8080');
})

app.get('/shortest_path/:departure/:destination', (req, res) => {

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
async function buildTreeFromDeparture(stopId) {
    try {
        const currentStop = await Stops.findById(stopId)
        
        const stopsFromCurrentStopTrip = await StopTimes.getStopsFollowingCurrentStopOnLongestTrip(currentStop.stop_id)
        let previousStopId = stopsFromCurrentStopTrip.shift().stop_id
        graph.addNoeud(previousStopId)
        for (const stop of stopsFromCurrentStopTrip) {
            const { transfer_stop_id, stop_id } = stop
            if (previousStopId != stop_id) {
                graph.addPath(previousStopId, stop_id, 1)
                previousStopId = stop_id
            }
            if (transfer_stop_id != null) {
                graph.addPath(stop_id, transfer_stop_id, 1)
                //await buildTreeFromDeparture(transfer_stop_id)
            }
        }
    } catch (e) {
        console.log(e.hint)
    }
}