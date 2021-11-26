const express = require('express')
const app = express()
const cors = require('cors')

const Dijkstra = require('./Dijkstra')
const Graph = require('./Graph')

const Postgres = require('./db/Postgres')
const StopTimes = require('./models/stop_times.model')
const Transfers = require('./models/transfers.model')
const Noeud = require('./Noeud')

app.use(cors())

let graph = new Graph()
let stations = {}
let computedPaths = new Map()
app.listen(8080, async () => {
    await Postgres.init()
    await run()
    console.log(graph.getNoeuds().get('Torcy'))
    console.log('app started on port 8080');
    run()
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
async function run() {

    const stops = await StopTimes.getAll()
    let currTripId = stops[0].trip_id
    let currStopName = stops[0].stop_name
    let currStopId = stops[0].stop_id
    graph.addNoeud(currStopName)

    for (let i = 1; i < stops.length; i++) {
        const { route_long_name, trip_id, stop_id, stop_name, departure_time } = stops[i]
        console.log(route_long_name, stop_name, departure_time, trip_id)
        if (trip_id === currTripId) {
            graph.addPath(currStopName, stop_name, 1)
        }
        console.log(currStopName, '=>' , stop_name, '----')
        const transfersOfCurrentStop = await Transfers.getTransferByFromStop_id(currStopId)
        console.log(transfersOfCurrentStop)
        for (const transfer of transfersOfCurrentStop) {
            console.log(currStopName, transfer.stop_name)

            graph.addPath(currStopName, transfer.stop_name, 1)

        }
        
        currTripId = trip_id
        currStopName = stop_name
        currStopId = stop_id
    }
    
}