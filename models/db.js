const
  mysql = require('mysql'),
  chalk = require('./chalk')

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8mb4'
})

db.connect(err => {
  if(err){
    chalk.e(err)
  }
})

const query = (q, data) => {
  return new Promise((resolve, reject) => {
    db.query(q, data, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

module.exports = {
  db,
  query
}
