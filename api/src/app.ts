import express from "express"
import morgan from "morgan"
import routes from './routes'

const server =  express();

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }))
server.use(morgan('dev'))

server.use('/api', routes)

export default server;