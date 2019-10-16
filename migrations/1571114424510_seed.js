/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
 pgm.sql ("INSERT INTO users (name) VALUES ('john');");
        pgm.sql(" INSERT INTO users (name) VALUES ('slimshady'); ");
	pgm.sql(" INSERT INTO users (name) VALUES ('Rebecca'); ");
	pgm.sql(" INSERT INTO users (name) VALUES ('Satan'); ");
	pgm.sql(" INSERT INTO users (name) VALUES ('Jesus'); ");
        pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'ratamahatta hta mahatta'); ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('1', 'ratamahatta hta mahatta'); ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('2', 'guess whos back'); ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('2', 'shady back');  ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('3', 'Hi im Becca');  ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('3', 'Im Becca black');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('4', 'Ill be back');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('4', 'I am back');   ");
	pgm.sql(" INSERT INTO posts (userid, body) VALUES ('5', 'You will never win, Satan!');   ");
};

exports.down = (pgm) => {
};
