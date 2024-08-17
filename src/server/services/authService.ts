import { prisma } from '../../prisma/prismaClient'
import bcryptjs from 'bcryptjs'

export class AuthService {
  async login(usuario: any) {
    const user = await prisma.usuario.findUnique({ where: { nome: usuario.nome } })
    const isValid = await bcryptjs.compare(usuario.senha, user.senha)
    return isValid
  }
}