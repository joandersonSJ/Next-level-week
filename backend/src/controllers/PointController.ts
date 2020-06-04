import knex from '../database/index'
import { Request, Response } from 'express'

class Point {
  async index (req: Request, res: Response) {
    const { city, uf, items } = req.query

    const parsedItem = String(items)
      .split(',')
      .map(item => Number(item.trim()))

    const point = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.id_point')
      .whereIn('point_items.id_item', parsedItem)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

    return res.json(point)
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
    const trx = await knex.transaction()

    try {
      const pointIDreturning = await trx('points').insert(point).returning('id')
      const id_point = Number(pointIDreturning)

      const point_items = items.map((id_item: Number) => {
        return {
          id_item,
          id_point
        }
      })

      await trx('point_items').insert(point_items)

      await trx.commit()

      if (trx.isCompleted() === false) {
        return res.json({ sucess: false })
      }
      return res.json({ id_point, ...point })
    } catch (error) {
      await trx.rollback()

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
