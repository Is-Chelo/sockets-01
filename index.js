const Server = require('./bootstrap/Server');
require('dotenv').config();
const server = new Server();
server.execute();
