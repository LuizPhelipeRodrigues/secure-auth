import { Request, Response } from 'express';
import { erros } from '../utils/errors'
import { AuthService } from '../services/authService'

const service = new AuthService()

export class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { nome, senha } = req.body
            const usuario: any = { nome, senha }
            const data = await service.login(usuario)
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
}