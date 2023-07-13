function popup(){
    const chec1=document.getElementById("check1")
    const chec2=document.getElementById("check2")
if(chec1.checked==true){
    alert("Foi recebido com sucesso");
    const item = document.querySelector(".content")
    item.style.display = "inline"
    document.querySelector("h2").innerHTML = "Tipo: Home office"
    var date = new Date()
    var dia = date.getDate()
    var ano=date.getFullYear()
    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();
    document.querySelector("h3").innerHTML = dia+"/"+ano + "-" + hora + ":" + min + ":" + seg
    
    var opt = {
        margin:       1,
        filename:     'Justificativa.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2  },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
   
    html2pdf().set(opt).from(item).save();
   
chec1.checked=false
    chec2.checked = false

}else if (chec2.checked == true) {
    
    alert("Foi recebido com sucesso");
    const item = document.querySelector(".content")
    item.style.display = "inline"
    document.querySelector("h2").innerHTML = "Tipo: Atestado médico(envie-o junto com este pdf)"
    var date = new Date()
    var dia = date.getDate()
    var ano=date.getFullYear()
    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();
    document.querySelector("h3").innerHTML = dia + "/"+ano + "-" + hora + ":" + min + ":" + seg
    
    var opt = {
        margin:       1,
        filename:     'Justificativa.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2  },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
   
    html2pdf().set(opt).from(item).save();
   
chec1.checked=false
    chec2.checked = false



}else if (chec2.checked == true && chec1.checked==true ) {
    alert("Selecione apenas uma justificativa");
}else {

    alert("Selecione alguma justificativa");
    }
}


