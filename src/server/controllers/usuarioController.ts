import { Request, Response } from 'express'
import { UsuarioService } from '../services/usuarioService'
import { IUsuario } from '../interfaces/IUsuario'
import { erros } from '../utils/errors'

const service = new UsuarioService()

export class UsuarioController {

    async getAllUsuarios(req: Request, res: Response) {
        try {
            const data = await service.getAllUsuarios()
            return res.status(200).json(data)
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("GET request received to getAllUsuarios with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async getUsuarioByID() {}

    async createUsuario(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body
            const usuario: IUsuario = { nome, email, senha }
            await service.createUsuario(usuario)
            return res.status(200)
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("POST request received to createUsuario with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async updateUsuario() {}

    async deleteUsuario() {}
}