const Router = require('koa-router')
const database = require('database')
const HttpStatus = require("http-status");


const router = Router()


router.get("/book",async (ctx,next)=>{
  const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});


router.get('/test', async ctx => {
  ctx.body = await database.query('SELECT 1 + 1 AS result')
    .then(c => c.rows[0].result)
})

module.exports = router
