import handleAlert from "./handleAlert";
import { useNavigate } from "react-router-dom";

export default function HandleAuthenticationError({token, message}){
    const navigate = useNavigate();
    if(!token){
        handleAlert('error', 'Não autenticado!', message);
        navigate('/');
    }

 
}