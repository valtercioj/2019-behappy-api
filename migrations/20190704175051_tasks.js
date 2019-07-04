exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tasks");
};