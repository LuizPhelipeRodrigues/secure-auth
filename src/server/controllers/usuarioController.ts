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

    async getUsuarioByID(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = await service.getUsuarioByID(id)
            return res.status(200).json(data)
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("POST request received to getUsuarioByID with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async createUsuario(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body
            const nUsuario: IUsuario = { nome, email, senha }
            await service.createUsuario(nUsuario)
            return res.status(201).send('User created successfully!')
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

    async updateUsuario(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { nome, email, permissao } = req.body
            const uUsuario = { nome, email, permissao }
            await service.updateUsuario(uUsuario, id)
            return res.status(201).send('User updated successfully!')
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("PUT request received to updateUsuario with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async updateSenha(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { senha } = req.body
            await service.updateSenha(senha, id)
            return res.status(201).send('Password updated successfully!')
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("PUT request received to updateSenha with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async updatePermissao(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { permissao } = req.body
            await service.updatePermissao(permissao, id)
            return res.status(201).send('Permission updated successfully!')
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("PUT request received to updatePermissao with error", message);
            return res.status(500).json({ ...message, code });
        }
    }

    async deleteUsuario(req: Request, res: Response) {
        try {
            const { id } = req.params
            await service.deleteUsuario(id)
            return res.status(201).send('User deleted successfully!')
        } catch (error) {
            const { code } = error;
            const message = Object.entries(erros).find(([key, value]) => {
                if (key === code) {
                    return value;
                }
                return;
            })?.[1];
            console.log("DELETE request received to deleteUsuario with error", message);
            return res.status(500).json({ ...message, code });
        }
    }
}