import knex from "knex";

export default knex({
	client: "sqlite3",
	connection: {
		filename: "./behappy.sqlite",
		charset: "utf8"
	},
    useNullAsDefault: true
});