const table_name = "who";

exports.up = function(knex, Promise) {
    return knex.schema.createTable(table_name, (table) => {
          table.increments('id').primary();
          table.string('title').notNullable();
          table.integer('image_index').nullable();
          table.timestamps();
    });
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable(table_name);
};