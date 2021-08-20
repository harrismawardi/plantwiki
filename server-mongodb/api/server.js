const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const plantRoutes = require('./controllers/plants')
server.use('/plants', plantRoutes)

server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server