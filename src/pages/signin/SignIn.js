import { AuthForm } from "../../components/AuthForm";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/auth";
import * as authAlerts from '../../handlers/handleAuthAlerts';
import tokenContext from "../../contexts/tokenContext";


export default function SignIn(){
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('12345');
    const navigate = useNavigate();
    const {setToken} = useContext(tokenContext);

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
        try{
            const token = await signin(body);
            authAlerts.succsessSigninAlert();
            console.log(token)
            setToken(token);
            navigate('/home');

        }catch(e){
            authAlerts.incorrectEmailAlert('Email ou senha incorretos');
        }


    }
    return(
        <AuthForm>
            <form onSubmit={handleSignin}>
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button>Confirmar</button>

                <Link to='/sign-up'>
                    Não tem uma conta? Cadastre-se
                </Link>
                               
            </form>

        </AuthForm>
    );
}
