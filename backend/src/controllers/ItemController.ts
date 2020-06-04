import knex from '../database/index'
import { Request, Response } from 'express'

export default {
  async index (req:Request, res:Response) {
    const items = await knex('items').select('*')

    const serializedItem = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http:localhost:3333/uploads/${item.image}`
      }
    })

    return res.json(serializedItem)
  }
}
