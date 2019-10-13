const { Pool } = require('pg')
const config = require('configuration')

exports.start = async function () {
  const host = config.get('PGHOST')
  const user = config.get('PGUSER')
  const port = config.get('PGPORT')
  const password = config.get('PGPASSWORD')
  const database = config.get('PGDATABASE')
  this.pool = new Pool({ user, host, database, password, port })
}

exports.close = async function () {
  await this.pool.end()
}

exports.query = async function (q, data) {
  return this.pool.query(q, data)
}
