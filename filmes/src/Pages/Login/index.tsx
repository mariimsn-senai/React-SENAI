import React, { useState } from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import Input from '../../Componets/input/index';
import '../../Assets/Style/global.css';
import {useHistory} from 'react-router-dom';
import Button from '../../Componets/button';

function Login() {

    let history = useHistory();

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    
    const login = () =>{
        const login = {
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/conta/login',{
            method:'POST',
            body: JSON.stringify(login),
            headers:{
                'content-ty' : 'application/json'
            }
        }
        )

        
        .then(response => response.json())
        .then (dados=>{
            if(dados.token !==undefined || dados.token !==null|| dados.token !=='')
            {
                localStorage.setItem('token-filmes', dados.token)
                history.push('/');
            }else{
                alert("Senha ou E-mail incorretos")
            }
        })
        .catch(error=>console.error(error))
    }
    
    return (
        <div className="principal">
            <Header description="Faça o login para acessar a Coletanea" />
            <div className="centro">
                <div className="login">
                    <form onSubmit={event=>{
                        event.preventDefault()
                        login()
                    }}>
                      <h1>Login</h1>
                      <div className="inputs">
                        <Input type="email" name="email" label="E-mail" onChange={e => setEmail(e.target.value)}/>
                        <Input type="password" name="senha" label="Senha" onChange={s => setSenha(s.target.value)}/>
                        <div className="btn">
                            <Button send="Enviar"/>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;