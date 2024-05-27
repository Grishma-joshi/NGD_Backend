// const { Pool } = require('pg');

// const host = 'localhost'
// const database = 'postgres'
// const username = 'postgres'
// const password = 'new_password'
// const port = 5432; 
// const pool = new Pool({
//   host,
//   database,
//   user: username,
//   password,
//   port,
// })
// module.exports = pool;


const { Pool } = require('pg');

const host = 'db.nigst.site'
const database = 'dms'
const username = 'dms_user'
const password = 'kspl@123'
const port = 5432; 
const pool = new Pool({
  host,
  database,
  user: username,
  password,
  port,
})
module.exports = pool;