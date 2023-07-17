from flask  import Flask,render_template,redirect,request,flash,jsonify,make_response,session

import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'gfg43ret23'





@app.route('/')
def home():
    
    return render_template('load.html')




@app.route('/porteiro_motorista')
def pomot():
    return render_template('porteiro_motorista.html')



@app.route('/selecao_vagas')
def sv():
    return render_template('selecao_vagas.html')

@app.route('/selecao_vagas_mot')
def svm():
    return render_template('selecao_vagas_mot.html')

@app.route('/just')
def jus():
    return render_template("just.html")


@app.route('/mot')
def mot1():
    return render_template('mot1.html')



@app.route('/mot1')
def mot():
    return render_template('mot1.html')
    

@app.route('/login',methods=['GET','POST'])
def login():
    nome=request.form.get('nome')
    senha=request.form.get('senha')
    

    with open('usuarios.json') as usuariosTemp:
        usuarios = json.load(usuariosTemp)
        cont = 0
        for usuario in usuarios:

            cont += 1
            if cont >= len(usuarios):
                flash('USUARIO INVALIDO')
                return render_template('login.html')
            if usuario['nome'] == nome and usuario['senha'] == senha:
                  return render_template('selecao_vagas.html')
           
         
   
            








if __name__ in "__main__":
    app.run(debug=True)   