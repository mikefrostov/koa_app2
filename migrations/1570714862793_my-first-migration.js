/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
pgm.createTable('users', {
    id: { type: 'serial', notNull: true, primaryKey: true},
    name: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createTable('posts', {
    id: {type: 'serial', notNull: true, primaryKey: true},
    userid: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade'
    },
    body: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createIndex('posts', 'userid');
};

exports.down = (pgm) => {

};
