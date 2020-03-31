// Update with your config settings.

// const databaseURL = 'postgresql://localhost/RECIPE_COLLECTOR_DATABASE' 

module.exports = {


  development: {
    client: 'pg',
    connection: 'postgresql://localhost/RECIPE_COLLECTOR_DATABASE'
  },

  staging: {
    // client: 'postgresql',
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
