import { AuthForm } from "../../components/AuthForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as authAlerts from '../../handlers/handleAuthAlerts';
import { signup } from "../../services/auth";


export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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


        try{
            const response = await signup(body);
            authAlerts.succsessSignupAlert();
        }catch(e){
            authAlerts.incorrectEmailAlert('Este email já existe');
        }
    }
    return(
        <AuthForm>
            <form onSubmit={handleSignUp}>
                <input placeholder="nome" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input placeholder="confirme a senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                <button>Confirmar</button>

                <Link to='/'>
                    Já tem uma conta? Entrar
                </Link>
                               
            </form>

        </AuthForm>
    );
}