
// COLOCAR OS NÚMEROS DIGITADOS PARA O DISPLAY

function pegarNumber(num){

   var numero = document.getElementById('screen-input').innerHTML ;
   document.getElementById('screen-input').innerHTML = numero + num;
}

// LIMPAR NÚMERO NO DISPLAY

function clearNumber(){
   document.getElementById('screen-input').innerHTML = "";
}

// CALCULAR NUMBER

function calculate(){
   var resultado = document.getElementById('screen-input').innerHTML;
   if(resultado){
     
      document.getElementById('screen-input').innerHTML = eval(resultado);
   }
   else {
      alert("NADA PARA CALCULAR,DIGITE ALGO!!");
   }
}

