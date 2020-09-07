const { io } = require('../server');

io.on('connection', (client) => {
    console.log('USUARIO CONECTADO');

    client.emit('EnviarMensaje', {
        usuario: 'Administrador',
        mssage: 'BIENVENIDO A ESTA APLICACION'
    });

    client.on('disconnect', () => {
        console.log('USUARIO DESCONECTADO');
    });

    //Escuchar cliente
    client.on('EnviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('EnviarMensaje', data);
        /*if (message.usuario) {
            callback({
                resp: 'TODO SALIO OK!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MA!!!!!!!!!'
            });
        }*/
    });

});