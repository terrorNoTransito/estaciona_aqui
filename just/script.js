function popup(){
    const chec1=document.getElementById("check1")
    const chec2=document.getElementById("check2")
if(chec1.checked==true||chec2.checked==true){
alert("Foi recebido com sucesso");
chec1.checked=false
chec2.checked=false
}else{

    alert("Selecione Alguma justificativa");
}
}


