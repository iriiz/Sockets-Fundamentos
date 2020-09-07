var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('CONECTADO AL SERVIDOR');
});

socket.on('disconnect', function() {
    console.log('PERDIMOS CONECCION EL SERVIDOR');
});

//Envia informacion
socket.emit('EnviarMensaje', {
    usuario: 'Celia Iris',
    message: 'hola mundo'
}, function(resp) {
    console.log('RESPUESRA SERVER: ', resp);
});

//Escuchar Informacion
socket.on('EnviarMensaje', function(message) {
    console.log('SERVIDOR: ', message);
});