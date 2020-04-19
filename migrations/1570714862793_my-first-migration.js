/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
pgm.createTable('lists', {
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
    listid: {
      type: 'integer',
      notNull: true,
      references: '"lists"',
      onDelete: 'cascade'
    },
    body: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createIndex('posts', 'listid');
};

exports.down = (pgm) => {

};
