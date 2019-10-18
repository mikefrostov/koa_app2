const Koa = require('koa')
const router = require('routing')
const ResponseTime = require('koa-response-time')
const Morgan = require('koa-morgan')
const db = require('database')
const BodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const cors = require('koa-cors');
const mount = require('koa-mount');
const HttpStatus = require('http-status');
const Logger = require('koa-logger');
const send = require('koa-send')


const app = new Koa()

app.use(ResponseTime())
app.use(Morgan('combined'))
app.use(router.routes())
app.use(BodyParser());
app.use(Logger());
app.use(cors());

app.use(serve('frontend/build'));

exports.start = async function () {
  try {
    await db.start()
    console.log('Database connected')
    this.server = await app.listen(3000)
    console.log('Server listening on port 3000')
  } catch (error) {
    console.log(error)
  }
}

exports.close = async function () {
  await this.server.close()
  await db.close()
}
