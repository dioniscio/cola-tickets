//comando para establecer la conexion.

var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');


var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');


var lblTckets =[lblTicket1,
                lblTicket2,
                lblTicket3,
                lblTicket4];

var lblEscritorios =[lblEscritorio1,
                     lblEscritorio2,
                     lblEscritorio3,
                     lblEscritorio4];




socket.on('estadoActual',function(data){
    

    actualuzarHTML(data.ultomos4);
});


socket.on('ultimos4',function(data){
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualuzarHTML(data.ultomos4);
})


function actualuzarHTML(ultimos4){

    for (var i=0; i <=ultimos4.length-1; i++){

        lblTckets[i].text('Tikect' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio' + ultimos4[i].escritorio);
    }
}
