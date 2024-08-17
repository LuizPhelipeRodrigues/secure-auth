import express from "express"
import { usuariosRoutes } from './usuariosRoutes.js'
import { authRoutes } from './authRoutes.js'

const routes = express()

routes.use('/', usuariosRoutes)
routes.use('/', authRoutes)

export { routes }