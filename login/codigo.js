function ver(){
var code = document.getElementById('senha').value;
var usuario=document.getElementById('usuario').value;
var aviso=document.getElementById('alerta');
var valor = code.length;
var embora =document.getElementById('buttao')
if(code=="senha" && usuario=="nome"){
  alert("Você entrou")
  aviso.style.display="none"
window.location="/port1/port1.html"
}else if(valor==0){
    aviso.style.display="flex"
    aviso.innerHTML="* Digite uma senha"

} else if(!(code=="senha") || !(usuario=="nome") ){
    aviso.style.display="flex"
    aviso.innerHTML="*  A Senha ou Usuario está errada contate o suporte."
    

}else if(usuario.length==0){
  aviso.style.display="flex"
  aviso.innerHTML="* Digite um nome"
}
  
}

function voltar(){

  window.location="/porteiro_morotirsta/escrita.html"
}
