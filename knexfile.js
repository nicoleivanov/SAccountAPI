// Update with your config settings.

const {
  POSTGRES_DB: database = 'accounts',
  POSTGRES_USER: user = 'root',
  POSTGRES_PASSWORD: password = 'password',
  POSTGRES_PORT: port = '6000',
  POSTGRES_HOST: host = 'localhost',
} = process.env;

module.exports = {
  client: 'postgresql',
  connection: {
    host,
    database,
    user,
    password,
    port,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
