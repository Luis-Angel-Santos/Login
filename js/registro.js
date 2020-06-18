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
       return;
   }

   console.log('validando datos');
}