const table_name = "tasks";

exports.up = function(knex, Promise) {
	return knex.schema.createTable(table_name, (table) => {
		table.increments('id').primary();
		table.string('title').notNullable();
		table.string('description').nullable();
		table.integer('what').notNullable().default(0);
		table.integer('who').notNullable().default(0);
		table.boolean('done').notNullable().default(false);
		table.boolean('delete').notNullable().default(false);
		table.timestamps();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable(table_name);
};