import knex from '../database/index'
import { Request, Response } from 'express'

class Point {
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

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    try {
      const trx = await knex.transaction()
      const pointIDreturning = await trx('points').insert(point).returning('id')
      const id_point = Number(pointIDreturning)

      const point_items = items.map((id_item: Number) => {
        return {
          id_item,
          id_point
        }
      })

      await trx('point_items').insert(point_items)

      if (trx.isCompleted() === true) {
        return res.json({ sucess: false })
      }
      return res.json({ id_point, ...point })
    } catch (error) {
      return res.json({ error: true })
    }
  }
}

export default new Point()
