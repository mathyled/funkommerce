import express from "express"
import morgan from "morgan"
import routes from './routes'

const server =  express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 
}

server.use(cors())
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }))
server.use(morgan('dev'))

server.use('/api', routes)

export default server;