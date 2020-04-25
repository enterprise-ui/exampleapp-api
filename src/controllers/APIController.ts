import { Request, Response } from 'express'
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core'
import { getManager } from 'typeorm'

@Controller('')
export class APIController {

  @Get('hello')
  private async hello(req: Request, res: Response) {
    res.status(200).json({
        msg: 'Hello world'
      })
  }

  @Get('healthz')
  private async healthz(req: Request, res: Response) {
    res.status(200).json({
        msg: 'Health check passed'
      })
  }
}