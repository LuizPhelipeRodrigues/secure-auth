import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";

const usuariosRoutes = Router()
const controller = new UsuarioController()

usuariosRoutes.get('/usuarios', controller.getAllUsuarios)
usuariosRoutes.post('/usuarios/id/:id')
usuariosRoutes.post('/usuario', controller.createUsuario)
usuariosRoutes.put('/usuarios/id/:id')
usuariosRoutes.delete('/usuarios/id/:id')

export { usuariosRoutes };