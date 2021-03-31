const { Client } = require('pg')
const config = require('./server.config')
class PostgresStore {


    async init() {
        this.client = new Client(config)
        await this.client.connect()
        console.log('connected')
    }
}

module.exports = new PostgresStore()