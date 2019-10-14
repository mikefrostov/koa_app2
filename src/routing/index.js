const Router = require('koa-router')
const database = require('database')
const HttpStatus = require("http-status");
const koaBody = require('koa-body');

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

router.get('/users/:userid', async ctx => {
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'SELECT * FROM users WHERE id = $1;',
    values: [userid]
  };
      result = await database.query(queryConfig).then(c => c.rows);
    users = [];
        for (var i in result){
        users.push(result[i].name);
        }
    ctx.status = 200;
    ctx.body = users;
});


router.post('/users/:name', async ctx => {

// ctx.request.body -- access to params
// ctx.params // URL params, like :id
//async (ctx, next) => {
    newname = ctx.params.name;
    var queryConfig = {
    text: 'INSRT INTO users (name) VALUES ($1);',
    values: [newname]
  };
      result = await database.query(queryConfig);
    ctx.status = 200;
    ctx.body = result;

});


router.get('/posts', async ctx => {
    result = await database.query('SELECT * FROM posts;').then(c => c.rows); //.then(c => c.rows[0]);

    posts = [];
	for (var i in result){
        posts.push(result[i].body);
	}
    ctx.status = 200;
    ctx.body = posts;
});

router.get('/posts/:postid', async ctx => {
    postid = ctx.params.postid;
    var queryConfig = {
    text: 'SELECT * FROM posts WHERE id = $1;',
    values: [postid]
  };
      result = await database.query(queryConfig).then(c => c.rows);
    posts = [];
        for (var i in result){
        posts.push(result[i].body);
        }
    ctx.status = 200;
    ctx.body = posts;
});

router.get('/user-posts/:userid', async ctx => {
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'SELECT * FROM posts WHERE userid = $1;',
    values: [userid]
  };
      result = await database.query(queryConfig).then(c => c.rows);
    posts = [];
        for (var i in result){
        posts.push(result[i].body);
        }
    ctx.status = 200;
    ctx.body = posts;
});


router.get('/dbcontest', async ctx => {
  ctx.body = await database.query('SELECT 1 + 1 AS result')
    .then(c => c.rows[0].result)
})

module.exports = router


