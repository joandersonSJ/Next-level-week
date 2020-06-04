import knex from '../database/index'
import { Request, Response } from 'express'

export default {
  async store (req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body

    const id = await knex('points').insert({
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }).returning('id')

    const point_items = items.map((id_item: Number) => {
      return {
        id_item,
        id_point: +id
      }
    })

    await knex('point_items').insert(point_items)

    return res.json({ sucess: true })
  }
}
