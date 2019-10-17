const Router = require('koa-router')
const database = require('database')
const HttpStatus = require("http-status");
const koaBody = require('koa-body');

const router = Router()


//     --------------------------- Users
//     get all users
router.get('/users', async ctx => {
    result = await database.query('SELECT * FROM users;').then(c => c.rows); //.then(c => c.rows[0]);

    users = [];
        for (var i in result){
        users.push(result[i].name);
        }
    ctx.status = 200;
    ctx.body = users;
});

//     get user name
router.get('/users/:userid', async ctx => {
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'SELECT name FROM users WHERE id = $1;',
    values: [userid]
  };
      result = await database.query(queryConfig).then(c => c.rows);
    user = result[0].name;
    ctx.status = 200;
    ctx.body = user;
});

//     create user
router.post('/users/:name', async ctx => {
    newname = ctx.params.name;
    var queryConfig = {
    text: 'INSERT INTO users (name) VALUES ($1);',
    values: [newname]
  };
      result = await database.query(queryConfig); 
      ctx.status = 200;
      ctx.body = result;
});


//     delete user
router.del('/users/:name', async ctx => {
      name = ctx.params.name;
      var queryConfig = {
      text: 'DELETE FROM posts WHERE posts.userid = (SELECT id FROM users WHERE users.name = $1 LIMIT 1);',
    values: [name]
  };
      result = await database.query(queryConfig);
      var queryConfig2 = {
      text: 'DELETE FROM users WHERE users.name = $1;',
      values: [name]
  };
      result2 = await database.query(queryConfig2);	
      ctx.status = 200;
      ctx.body = result2;
});

//    change particular user name
router.put('/users/:name/:newname', async ctx => {
    name = ctx.params.name;
    newname = ctx.params.newname;
   var queryConfig = {
    text: 'UPDATE users SET name = $1 WHERE users.name = $2;',
    values: [newname, name]
  };
      result = await database.query(queryConfig);
      ctx.status = 200;
      ctx.body = result.rowCount;
});



// --------------------------- posts 

//     get list of all posts
router.get('/posts', async ctx => {
    result = await database.query('SELECT * FROM posts;').then(c => c.rows);
    ctx.status = 200;
    ctx.body = result;
});

// get post by postid 
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

// get posts by username 
router.get('/posts/username/:name', async ctx => {
    name = ctx.params.name;
    var queryConfig = {
    text: 'SELECT * FROM posts WHERE posts.userid = (SELECT id FROM users WHERE users.name = $1);',
    values: [name]
  };
      result = await database.query(queryConfig).then(c => c.rows);
    posts = [];
        for (var i in result){
        posts.push(result[i].body);
        }
    ctx.status = 200;
    ctx.body = posts;
});

// list user posts
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

//     add post to a default user
router.post('/posts/:post', async ctx => {
    newpost = ctx.params.post;
    defaultuser = '1';
    var queryConfig = {
    text: 'INSERT INTO posts (userid, body) VALUES ($1, $2);',
    values: [defaultuser, newpost]
  };
      result = await database.query(queryConfig);
      ctx.status = 200;
      ctx.body = result;
});

// change post body
router.put('/posts/', async ctx => {
	body = ctx.params.post;
        defaultuser = '1';
//	var queryConfig = {
//        text: 'UPDATE posts SET body = $1, WHERE posts.id = $2;',
//    values: [body, postid]
//	};
        ctx.body = ctx.params;
});

//     add post to a particular user
router.post('/posts/:userid/:post', async ctx => {
    newpost = ctx.params.post;
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'INSERT INTO posts (userid, body) VALUES ($1, $2);',
    values: [userid, newpost]
  };
      result = await database.query(queryConfig);
      ctx.status = 200;
      ctx.body = result;
});


//     change particular post
router.put('/posts/:postid/:postbody', async ctx => {
    newbody = ctx.params.postbody;
    postid = ctx.params.postid;
    var queryConfig = {
    text: 'UPDATE posts SET body = $1, WHERE posts.id = $2;',
    values: [newbody, postid]
  };
      result = await database.query(queryConfig);
      ctx.status = 200;
      ctx.body = result;
});

// delete post of a user by id
//router.del('/posts/:userid/:postid', async ctx => {
//    userid = '1'; // in case that none is passed
//    postid = ctx.params.postid;
//    userid = ctx.params.userid;
//    var queryConfig = {
//    text: 'DELETE FROM posts WHERE posts.userid = $1 AND posts.id = $2;',
//    values: [userid, postid]
//  };
//      result = await database.query(queryConfig);
//      ctx.status = 200;
//      ctx.body = result;
//});

// delete post by id
router.del('/posts/:postid', async ctx => {
    postid = ctx.params.postid;
    userid = ctx.params.userid;
    var queryConfig = {
    text: 'DELETE FROM posts WHERE posts.id = $1;',
    values: [postid]
  };
      result = await database.query(queryConfig);
      ctx.status = 200;
      ctx.body = result;
});


router.get('/dbconntest', async ctx => {
  ctx.body = await database.query('SELECT 1 + 1 AS result')
    .then(c => c.rows[0].result)
})

module.exports = router


