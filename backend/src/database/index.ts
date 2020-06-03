import knex from 'knex';
import database from '../../knexfile';
const connection = knex(database.development)

export default connection;