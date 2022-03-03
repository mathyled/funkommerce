import routes from './routes'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }))
server.use(morgan('dev'))

server.use('/api', routes)

export default server;