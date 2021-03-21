class Person{

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.array = ["bonjour"]
    }
    speak() {
        console.log("Howdy, my name is" + this.name, this.array);
    }
};

var p1 = new Person("Bob", "M");
p1.speak();

(function test(person)
{
    let clone = Object.create(person)
    clone.name = 'test';
    clone.array = clone.array.concat(["salut"])
    console.log(clone)
})(p1);

p1.speak();

function shortestPath(departure, destination, cache) {

    //console.log(cache)
    if (!departure)
        return "cette station n'existe pas"
    let from = departure
    if (from.stationName == destination)
        return from
    //cache = detectDup(from.stationsAdjacentes,cache)
    from.stationsAdjacentes = everyStationComeFrom(from)
    from.stationsAdjacentes = from.stationsAdjacentes.concat(cache)
    
    let min = getMini(from.stationsAdjacentes);
    
        min.distanceParcouru += min.from.distanceParcouru
        //console.log("-----------------------")
    if (from.stationName == "F")
    console.log(from.stationsAdjacentes)
    let newStationsAdjacentes = getStationsAdjacentesExceptMin(min, from.stationsAdjacentes)
    return shortestPath(min, destination, newStationsAdjacentes)
}