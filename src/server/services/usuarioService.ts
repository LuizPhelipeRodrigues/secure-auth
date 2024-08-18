import { IUsuario } from "../interfaces/IUsuario";
import bcryptjs from "bcryptjs";
import { prisma } from '../../prisma/prismaClient'
import { v4 } from 'uuid'

export class UsuarioService {
    async getAllUsuarios() {
        const data = await prisma.usuario.findMany({ omit: { senha: true } })
        return data
    }

    async getUsuarioByID(id: string) {
        const data = await prisma.usuario.findUnique({ where: { id: id }, omit: { senha: true } })
        return data
    }

    async createUsuario(nUsuario: IUsuario) {
        const senhaHash = await bcryptjs.hash(nUsuario.senha, 8)
        const data = await prisma.usuario.create({
            data: {
                id: v4(),
                nome: nUsuario.nome,
                email: nUsuario.email,
                senha: senhaHash
            }
        })
        return data
    }

    async updateUsuario(uUsuario: any, id: string) {
        const data = await prisma.usuario.update({
            where: { id: id },
            data: {
                nome: uUsuario.nome,
                email: uUsuario.email,
                permissao: uUsuario.permissao
            }
        })
        return data
    }

    async updateSenha(senha: string, id: string) {
        const senhaHash = await bcryptjs.hash(senha, 8)
        const data = await prisma.usuario.update({ where: { id: id }, data: { senha: senhaHash } })
        return data
    }

    async updatePermissao(permissao: string, id: string) {
        const data = await prisma.usuario.update({ where: { id: id }, data: { permissao: permissao } })
        return data
    }

    async updateStatus(status: boolean, id: string) {
        const data = await prisma.usuario.update({ where: { id: id }, data: { ativo: status } })
    }

    async deleteUsuario(id: string) {
        const data = await prisma.usuario.delete({ where: { id: id } })
        return data
    }
}