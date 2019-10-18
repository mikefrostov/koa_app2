/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
 pgm.sql ("INSERT INTO users (name) VALUES ('john');");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'some post about some important subject'); ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'a post about important topic'); ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'buy groceries reminder');  ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'clean your room');  ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'some random rant post');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'a VERY important task');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'a slightly less important task');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'good day, sir');   ");
};

exports.down = (pgm) => {
};
