import { Request, Response } from 'express'
import { LoginService } from '../service/login.service'

export class AuthController {
  static async login(request: Request, response: Response) {
    const { email, senha } = request.body as any

    if (!email || !senha) {
      return response.status(400).send({ erro: 'Email e senha obrigatórios' })
    }

    try {
      const usuario = await LoginService.executar(email, senha)
      return response.send(usuario)
    } catch (err: any) {
      return response.status(401).send({ erro: err.message })
    }
  }
}
