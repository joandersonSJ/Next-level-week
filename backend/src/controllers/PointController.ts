import knex from '../database/index'
import { Request, Response } from 'express'

class Point {
  async index (req: Request, res: Response) {
    const { city, uf, items } = req.query
  }

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

      trx.commit()
      if (trx.isCompleted() === false) {
        return res.json({ sucess: false })
      }
      return res.json({ id_point, ...point })
    } catch (error) {
      return res.json({ error: true })
    }
  }

  async show (req: Request, res: Response) {
    const { id } = req.params

    // Posso omitir o select()
    const point = await knex('points')
      .where('id', id)
      .first()

    if (!point) {
      return res.status(400).json({ msg: 'Point not found' })
    }

    const item = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.id_item')
      .where('point_items.id_point', id)
      .select('title')

    const result = [
      point, {
        item
      }
    ]
    return res.json(result)
  }
}

export default new Point()
