const Dijkstra = require('../Dijkstra')
const Graph = require('./Graph')
const PostgresStore = require('./PostgresStore')
const stops = require('./metro-stops.json')
//console.log(stops)

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
async function run() {
    //await PostgresStore.init()
    let graph = new Graph()
    /*
        const response = await PostgresStore.client.query(`SELECT DISTINCT on(departure,destination) from_stop.stop_name AS departure,
        to_stop.stop_name   AS destination,
        min_transfer_time   AS traveltime,
        from_stop.stop_lat as from_et lat,
        from_stop.stop_lon as from_lon,
        to_stop.stop_lat as to_lat,
        to_stop.stop_lon as to_lon
    
    FROM   stops AS from_stop
        INNER JOIN transfers
                ON from_stop.stop_id = from_stop_id
        INNER JOIN stops AS to_stop
                ON to_stop.stop_id = to_stop_id `)
        const rows = response.rows
        for (let i = 0; i < rows.length; i++) {
            const source = rows[i].departure
            const destination = rows[i].destination
            const time = rows[i].traveltime
            graph.addPath(source, destination, time)
        }
    */
    let lines = new Map()
    let stations = {}
    for (let i = 0; i < stops.length; i++) {
        let currentStop = stops[i]
        for (let j = 0; j < stops[i].lines.length; j++) {
            let currentLine = currentStop.lines[j]

            if (lines.get(currentLine.line)) {
                if (!lines.get(currentLine.line).get(currentLine.position))
                    lines.get(currentLine.line).set(currentLine.position, [{ ...currentStop }])
                else
                    lines.get(currentLine.line).get(currentLine.position).push({ ...currentStop })
                const departure = currentStop.name + ' ' + currentLine.line
                graph.addNoeud(departure)
                if (currentStop.lines[j - 1]) {
                    graph.addPath(currentStop.name +' ' +currentStop.lines[j].line,currentStop.name + ' '+currentStop.lines[j - 1].line, 3000)
                }
                const nextStation = lines.get(currentLine.line).get(currentLine.position + 1)
                const previousStation = lines.get(currentLine.line).get(currentLine.position - 1)
                if (nextStation) {
                    for (let k = 0; k < nextStation.length; k++) {
                        const destination = nextStation[k].name + ' ' + currentLine.line
                        const distance = parseFloat((getDistanceFromLatLonInKm(currentStop.latitude, currentStop.longitude, nextStation[k].latitude, nextStation[k].longitude) * 1000).toFixed())
                        graph.addPath(departure, destination, distance)

                    }
                }
                if (previousStation) {
                    for (let k = 0; k < previousStation.length; k++) {
                        const destination = previousStation[k].name + ' ' + currentLine.line
                        const distance = parseFloat((getDistanceFromLatLonInKm(currentStop.latitude, currentStop.longitude, previousStation[k].latitude, previousStation[k].longitude) * 1000).toFixed())
                        graph.addPath(departure, destination, distance)

                    }
                }
            }
            else {
                lines.set(currentLine.line, new Map().set(currentLine.position, [{ ...currentStop }]))
                graph.addNoeud(currentStop.name + ' ' + currentLine.line)
            }

        }
    }
    graph.addPath('Châtelet-Les Halles rer-a', 'Châtelet-Les Halles rer-b', 1)
    graph.addPath('Châtelet-Les Halles rer-a', 'Châtelet ligne-7', 1)
    console.log(Dijkstra.shortestPath('Torcy rer-a', 'Mairie de Montreuil ligne-9', graph))
    //PostgresStore.client.end()
}

run()


/*
line = Map{
    'rer-A' => ['noisiel', ...]
}

*/