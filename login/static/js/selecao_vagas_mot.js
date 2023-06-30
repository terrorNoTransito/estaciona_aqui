const usuario=[{nome:'João',motorista:true},{nome:'Lorena',motorista:false}]
console.log(usuario[1].motorista)

function dis(x){
if(usuario[0].motorista){
x.disabled=true;
console.log("disable");
}
}


