import { pool } from '../config/database/db_conexao'
import {usuario} from '../types/types'

export class UsuarioRepository {
  static async buscarPorEmail(email: string): Promise<usuario | null> {
    const [rows]: any = await pool.query(
      'SELECT * FROM usuarios WHERE email = ? LIMIT 1',
      [email]
    )

    return rows.length ? rows[0] : null
  }
}
