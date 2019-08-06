//import { emit } from "cluster";

//comando para establecer la conexion

var socket = io();

var label = document.getElementById('lblNuevoTicket');
socket.on('connect',function(){

    console.log('conectado al servidor');
});

socket.on('disconnect',function(){

    console.log('Desconectado del servidor');
});


socket.on('estadoActual',function(data){
label.innerText=data.actual;

})

$('button').on('click',function(){
   
    socket.emit('siguienteTicket',null,function(siguienteTiket){
        label.innerText=siguienteTiket.siguiente;
    });

 
});