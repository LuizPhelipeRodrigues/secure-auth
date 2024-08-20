import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";
import authenticate from "../middleware/authenticate";

const usuariosRoutes = Router()
const controller = new UsuarioController()



usuariosRoutes
    .use(authenticate)
    .get('/usuarios', controller.getAllUsuarios)
    .post('/usuario/:id', controller.getUsuarioByID)
    .post('/usuario', controller.createUsuario)
    .put('/usuario/:id', controller.updateUsuario)
    .put('/usuario/senha/:id', controller.updateSenha)
    .put('/usuario/permissao/:id', controller.updatePermissao)
    .put('/usuario/status/:id', controller.updateStatus)
    .delete('/usuario/:id', controller.deleteUsuario)

export { usuariosRoutes };