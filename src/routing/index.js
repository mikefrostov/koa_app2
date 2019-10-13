const Router = require('koa-router')
const database = require('database')
const HttpStatus = require("http-status");


const router = Router()


router.get('/users', async ctx => {
    result = await database.query('SELECT * FROM users;').then(c => c.rows); //.then(c => c.rows[0]);

    users = [];
        for (var i in result){
        users.push(result[i].name);
        }
    ctx.status = 200;
    ctx.body = users;
});

//router.post


router.get('/posts', async ctx => {
    result = await database.query('SELECT * FROM posts;').then(c => c.rows); //.then(c => c.rows[0]);

    posts = [];
	for (var i in result){
        posts.push(result[i].body);
	}
    ctx.status = 200;
    ctx.body = posts;
});

router.get('/posts/:userid', async ctx => {
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'SELECT * FROM posts WHERE userid = $1;',
    values: ['1']
  };
      result = await database.query(queryConfig).then(c => c.rows);
    posts = [];
        for (var i in result){
        posts.push(result[i].body);
        }
    ctx.status = 200;
    ctx.body = posts;
});




router.get('/test', async ctx => {
  ctx.body = await database.query('SELECT 1 + 1 AS result')
    .then(c => c.rows[0].result)
})

module.exports = router


