function crearmensaje(texto, tipo){
    const nuevoelemento=document.createElement('div');
    nuevoelemento.innerText=texto;
    nuevoelemento.classList.add('alert', 'alert-' +tipo);
    const divmensaje=document.getElementById('mensaje');
    divmensaje.appendChild(nuevoelemento);
    setTimeout(function(){
    nuevoelemento.remove();
    }, 2000);
}