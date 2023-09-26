class Sockets {
	constructor(io) {
		this.io = io;
		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {
			console.log('Cliente conectado', socket.id);

			socket.emit('mensaje-bienvenida', {
				message: 'Bienvenido putin',
				date: new Date(),
			});

			socket.on('message-to-server', (data) => {
				this.io.emit('message-to-client', {texto: data.texto});
			});
		});
	}
}

module.exports = Sockets;
