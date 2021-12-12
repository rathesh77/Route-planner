const StopTimes = require('./models/stop_times.model')
const Transfers = require('./models/transfers.model')

const Postgres = require('./db/Postgres')
const Graph = require('./Graph')
async function test() {
    console.log('connexion à la bdd en cours')
    await Postgres.init()
    console.log('connexion à la bdd reussie')
    console.log('recuperations des voyages en cours')
    const graph =  await buildTreeFromDeparture()
    const node1652 = graph.getNoeuds().get(4614633)
    for (const [key,noeud] of node1652.getAdj()) {
        console.log(noeud.valeur+","+noeud.info.stop_name)
    }
    //console.log(node1652)
}

async function buildTreeFromDeparture() {
    let graph = new Graph()

    const stopTimes = await StopTimes.getAll()
    const transfers = await Transfers.getAll()
    let dictionary = new Map()
    for (const t of transfers) {
        const {min_transfer_time, from_stop_name, from_stop_desc, to_stop_name, to_stop_desc, from_stop_id, to_stop_id, from_stop_lat, from_stop_lon, to_stop_lat, to_stop_lon } = t
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
            min_transfer_time,
            sourceInfo,
            destInfo

        )
    }
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
                    getSecondsFromLocalTime(destInfo.departure_time) - getSecondsFromLocalTime(st.departure_time) ,
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
    return graph
}


function getSecondsFromLocalTime(time){
    //console.log(time)
    return time.split(':').reduce((a, b, i) => i == 0 ? (+b * 3600) : i == 1 ? (a + (+b * 60)) : (+a + +b), 0)

}
test()