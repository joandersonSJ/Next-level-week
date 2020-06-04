import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'

class App {
  public express: express.Application
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void{
    this.express.use(routes)
    this.express.use('/uploads', express.static(path.resolve(__dirname, '.', 'tmp')))
  }
}

export default new App().express
