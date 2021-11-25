const Postgres = require('../db/Postgres')
class Transfers {
    /**
     * @param tableName {String}
     *  
     */
    static async getAll() {
        const result = await Postgres.client.query(
            `SELECT * from ${this.tableName}`
        )
        return result.rows
    }
}
/**
 *  @type {String}
 */
Transfers.tableName = 'transfers'

module.exports = Transfers