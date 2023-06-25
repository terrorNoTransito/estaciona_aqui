const express = require('express')
const app = express();
const path =require('path')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,"public")))
//O problema do Css
//Colocar o codigo  da tela no node js
//Mostrar 1 tela para 2 diferentes usuarios com alteração remota
//Login-Pode ser resolvido no próxima acompanhamento
//Organizar o node js nas routers-Pode ser resolvido no próxima acompanhamento
app.get('/',(req,res) =>{

    res.render('views/load.ejs')

} )


app.listen('8000',function(){

console.log("Servidor carregado")

})