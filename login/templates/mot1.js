
function justificar() { 

    alert("Agora envie o pdf para o email do suporte");
    const item = document.querySelector(".content")
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
    





}

