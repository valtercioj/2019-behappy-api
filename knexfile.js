module.exports = {
  development: {
    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./seeds" },

    client: "sqlite3",
    connection: {
      filename: "./behappy.sqlite",
      charset: "utf8",
      useNullAsDefault: true
    }
  },
  production: {
    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./seeds" },

    client: "sqlite3",
    connection: {
      filename: "./behappy.sqlite",
      charset: "utf8",
      useNullAsDefault: true
    }
  }
};
