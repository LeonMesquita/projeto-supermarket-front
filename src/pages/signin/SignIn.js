import { AuthForm } from "../../components/AuthForm";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/auth";
import * as authAlerts from '../../handlers/handleAuthAlerts';
import tokenContext from "../../contexts/tokenContext";
import LoaderSpinner from "../../components/LoaderSpinner";
import styled from "styled-components";
import logo from '../../assets/images/logo.png'

export default function SignIn(){
    const [email, setEmail] = useState('teste2@gmail.com');
    const [password, setPassword] = useState('12345');
    const navigate = useNavigate();
    const {setToken} = useContext(tokenContext);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignin(event){
        event.preventDefault();
        if(!email || !password){
            authAlerts.handleIsEmpty();
            return;
        }
        const body = {
            email,
            password
        }

        setIsLoading(true);
        try{
            const token = await signin(body);
            authAlerts.succsessSigninAlert();
            console.log(token)
            setToken(token);
            navigate('/home');
            setIsLoading(false);

        }catch(e){
            authAlerts.incorrectEmailAlert('Email ou senha incorretos');
            setIsLoading(false);
        }


    }
    return(
        <AuthForm>
            
            <form onSubmit={handleSignin}>
            <img src={logo} alt="logo"/>
                <input disabled={isLoading ? true : false}  placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' disabled={isLoading ? true : false}   placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button disabled={isLoading ? true : false}  >{isLoading ? <LoaderSpinner /> : 'Entrar'}</button>

                <Link to='/sign-up'>
                    Não tem uma conta? Cadastre-se
                </Link>
                               
            </form>

        </AuthForm>
    );
}
