import { AuthForm } from "../../components/AuthForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authAlerts from '../../handlers/handleAuthAlerts';
import { signup } from "../../services/auth";
import LoaderSpinner from "../../components/LoaderSpinner";
import logo from '../../assets/images/logo.png'


export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSignUp(event){
        event.preventDefault();
        if(!email || !password || !name || !confirmPassword){
            authAlerts.handleIsEmpty();
            return;
        }
        const body = {
            email,
            password,
            name,
            confirmPassword
        }
        setIsLoading(true);

        try{
            const response = await signup(body);
           authAlerts.succsessSignupAlert();
           navigate('/');
            setIsLoading(false);
        }catch(e){
           authAlerts.incorrectEmailAlert('Este email já existe');
            setIsLoading(false);
        }
    }
    return(
        <AuthForm>
            <form onSubmit={handleSignUp}>
                <img src={logo} alt="logo"/>
                <input disabled={isLoading ? true : false}   placeholder="nome" value={name} onChange={e => setName(e.target.value)}/>
                <input disabled={isLoading ? true : false}   placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input disabled={isLoading ? true : false}   placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input disabled={isLoading ? true : false}   placeholder="confirme a senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                <button disabled={isLoading ? true : false}  >{isLoading ? <LoaderSpinner /> : 'Cadastrar'}</button>

                <Link to='/'>
                    Já tem uma conta? Entrar
                </Link>
                               
            </form>

        </AuthForm>
    );
}