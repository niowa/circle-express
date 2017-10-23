
exports.up = function(knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(function () {
    return knex.schema.createTable('users', function (table) {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
      table.string('name');
    })
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

