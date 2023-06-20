const usuario=[{nome:'João',motorista:true},{nome:'Lorena',motorista:false}]
console.log(usuario[1].motorista)

function dis(x){
if(usuario[0].motorista){
x.disabled=true;
console.log("disable");
}
}


var time = new Date()
console.log(time.getHours()+':'+time.getMinutes());
function voltar(){

    window.location="/porteiro_morotirsta/escrita.html"
}