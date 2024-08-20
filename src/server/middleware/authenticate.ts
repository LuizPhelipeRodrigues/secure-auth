import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken'

export default async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
    
    if (!token) {    
        return res.status(401).send('Token não informado')
    }
    const [, accessToken] = token.split(" ")
    try {
        const data = jsonwebtoken.verify(accessToken, process.env.SECRET_KEY)
        console.log(data);
        
        const { id, nome } = jsonwebtoken.decode(accessToken)
        return next()
    } catch (error) {
        res.status(401).send('Usuário não autorizado')
    }
}