import bcrypt from 'bcryptjs'
import { UsuarioRepository } from '../repositories/login.respository'

export class LoginService {
  static async executar(email: string, senha: string) {
    const usuario = await UsuarioRepository.buscarPorEmail(email)

    if (!usuario) {
      throw new Error('Usuário ou senha inválidos')
    }

    if (!usuario.ativo) {
      throw new Error('Usuário desativado')
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash)

    if (!senhaValida) {
      throw new Error('Usuário ou senha inválidos')
    }

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      perfil: usuario.perfil
    }
  }
}
