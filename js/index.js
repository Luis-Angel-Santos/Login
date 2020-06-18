//declarar variables
const usuario=document.getElementById('user');
const password=document.getElementById('pass');
const formulario=document.getElementById('formlogin');
//gerenando eventos
formulario.addEventListener('submit', login);
//funciones
function login(e){
   e.preventDefault();
   
   let usuarioVal=usuario.value;
   let passwordVal=password.value;

   if (usuarioVal=='' || passwordVal=='') {
    crearmensaje('Verifica tus campos', 'danger');   
    return;
   }

   if (localStorage.getItem('usuario')) {
       let objeto=JSON.parse(localStorage.getItem('usuario'));

       if (usuarioVal==objeto.user && passwordVal==objeto.pass) {
           crearmensaje('Usuario correcto', 'success');
       }
       else{
           crearmensaje('usuairo incorrecto', 'danger');
       }
   }
   else{
       crearmensaje('No existe el usuario', 'danger');
   }

}