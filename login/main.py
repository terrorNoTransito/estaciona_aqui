from flask  import Flask,render_template,redirect,request,flash,jsonify,make_response,session
import time 
from threading import Timer
import json
import psycopg2
app = Flask(__name__)
app.config['SECRET_KEY'] = 'gfg43ret23'

connect_bd = psycopg2.connect(user = "postgres", password ="123", host = "localhost", port = "5432", database ="login")
cursor=connect_bd.cursor()
comando='Select * from login'
cursor.execute(comando)
usuariodb=cursor.fetchall()
print(usuariodb[1][1],len(usuariodb),usuariodb[1][2])
   
for x in range(len(usuariodb)):
    print(str(usuariodb[x][1]),x)



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






@app.route('/mot1')
def mot():
    return render_template('mot1.html')
    

@app.route('/login',methods=['GET','POST'])
def login():
    nome=request.form.get('nome')
    senha=request.form.get('senha')
    cont=0
    for x in usuariodb:
        cont+=1
        nomedb=str(x[1])
        senhadb=str(x[2])
        

        if cont>= len(usuariodb):
            flash("Usuario ou senha INVALIDOS")
            return render_template('login.html')
        if nomedb==nome and senhadb==senha:
            print(nome,"Logado!")
            return render_template('selecao_vagas.html')
        else:
            flash("Usuario ou senha INVALIDOS")
            return render_template('login.html')
   
            








if __name__ in "__main__":
    app.run(debug=True)   