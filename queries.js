const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll() {
        return database('recipes')
    },

    listUsers() {
        return database('users')
    }

    


}