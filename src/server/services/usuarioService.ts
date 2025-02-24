import { IUsuario } from "../interfaces/IUsuario";
import bcryptjs from "bcryptjs";
import { prisma } from '../../prisma/prismaClient'

export class UsuarioService {
    async getAllUsuarios() {
        const data = await prisma.usuario.findMany()
        return data
    }

    async createUsuario(usuario: IUsuario) {
        const senhaHash = await bcryptjs.hash(usuario.senha, 8)
        const data = await prisma.usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                senha: senhaHash
            }
        })
        return data
    }
}