require('dotenv').config()

const knex = require('knex')({
  client: process.env.DB_CLIENT || 'mysql',
  connection: {
    host: process.env.DB_HOST || 'your_host_here',
    user: process.env.DB_USER || 'your_user_here',
    password: process.env.DB_PASSWORD || 'your_password_here',
    database: process.env.DB_DATABASE || 'your_database_here'
  }
})

knex('users').then(rows => {
  console.log(rows)
})
