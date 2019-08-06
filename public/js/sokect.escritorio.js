var socket = io();

var  searchparams = new URLSearchParams(window.location.search);


 if(!searchparams.has('escritorio')){

window.location = 'index.html';
throw new Error('El escrtiroio es necesario');
 }


 var escritorio = searchparams.get('escritorio');
 var label = $('small');

 console.log(escritorio);
 
 $('h1').text('Escritorio'+escritorio);

 $('button').on('click',function(){
 
    socket.emit('atenderTicket',{escritorio:escritorio},
    function(resp){
        console.log(resp);
        if(resp == 'No hay tickets'){
            
            label.text(resp);
            return;
        }

    
        label.text('Ticket' + resp.numero);
    })

 });