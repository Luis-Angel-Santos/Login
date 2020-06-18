const nombre=document.getElementById('name');
const email=document.getElementById('email');
const user=document.getElementById('user');
const password=document.getElementById('pass');
const formulario=document.getElementById('formregistro');

formulario.addEventListener('submit', registro);
//funciones
function registro(e){
   e.preventDefault();
   
   let nombreval=nombre.value;
   let emailval=email.value;
   let userval=user.value;
   let passval=pass.value;

   if (nombreval=='' || emailval=='' || userval=='' || passval=='') {
       crearmensaje('Verifica tus campos', 'danger');
       return;
   }

   const usuario={
       nombre: nombreval,
       email: emailval,
       user: userval,
       pass: passval
   }

   localStorage.setItem('usuario', JSON.stringify(usuario));

   email.value='';
   nombre.value='';
   user.value='';
   pass.value='';

   crearmensaje('Usuario Registrado', 'success')
}

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