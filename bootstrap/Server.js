const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./Sockets');
const cors = require('cors');
class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT | 8081;
		this.server = http.createServer(this.app);
		this.io = socketio(this.server, {
			/* Configuraciones*/
		});
	}

	middleware() {
		this.app.use(cors());
		this.app.use(express.static(path.basename(__dirname + '../public')));
	}

	execute() {
		this.middleware();
		this.configSockets();
		this.server.listen(this.port, () => {
			console.log('Server Listo :8080');
		});
	}

	configSockets() {
		const sockets = new Sockets(this.io);
	}
}

module.exports = Server;
