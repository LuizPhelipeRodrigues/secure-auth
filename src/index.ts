import express from 'express'
import { routes } from './server/routes'
import cors from 'cors'

const app = express()
const port = 3000

const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get("/", (req, res) => {
    res.send(
        `<h1>Hello, World</h1>
        <a href='http://localhost:3000/usuarios'>Usuários</a>`
    );
});

app.listen(port, () => console.log(`SERVER RUNNING IN localhost:${port}`))