import routes from './routes'

var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }))
server.use(morgan('dev'))

server.use('/api', routes)

export default server;