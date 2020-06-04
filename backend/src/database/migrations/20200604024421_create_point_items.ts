import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  await knex.schema.createTable('point_items', table => {
    table.increments('id').primary()
    table.integer('id_item').notNullable()
      .references('id')
      .inTable('items')
    table.integer('id_point').notNullable()
      .references('id')
      .inTable('points')
  })
}

export async function down (knex: Knex): Promise<any> {
  await knex.schema.dropTable('point_items')
}
