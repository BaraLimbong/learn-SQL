const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'baraboy86',
    database: 'mytasks'
  }
})
knex('users').then(rows => {
  console.log(rows)
})
