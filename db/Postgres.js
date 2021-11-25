const {pg, Client} = require('pg')
const config = require('./pg-config')
class Postgres {

    static async init() {
        this.client = new Client(config)
        await this.client.connect()
        this.client.query('SELECT NOW()', (err, res) => {
            console.log(err, res.rows[0].now)
            //client.end()
        })
    }
}

module.exports = Postgres