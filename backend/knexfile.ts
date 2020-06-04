// Update with your config settings.
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

module.exports = {

  development: {
    client: process.env.DB_CLIENT || 'root',
    connection: {
      database: process.env.DB_DATABASE || 'root',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
      extension: 'ts'
    },
    useNullAsDefault: true

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
