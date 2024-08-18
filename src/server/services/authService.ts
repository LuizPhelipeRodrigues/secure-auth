import { prisma } from '../../prisma/prismaClient'
import bcryptjs from 'bcryptjs'
import { sign } from 'jsonwebtoken'
export class AuthService {
  async login(usuario: any) {
    try {
      const user = await prisma.usuario.findFirst({
        where: { nome: usuario.nome, AND: { ativo: true } },
        select: { senha: true, id: true, nome: true },
      })

      if (!user) {
        throw new Error('Usuário não cadastrado ou inativo')
      }

      const { senha, id, nome } = user

      const isValid = await bcryptjs.compare(usuario.senha, senha)

      if (!isValid) {
        throw new Error("As senhas não conferem")
      }
      const accessToken = sign({ 
        id: id, nome: nome
       }, process.env.SECRET_KEY, { 
        expiresIn: 3000 
      })

      return { id, nome, accessToken }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}