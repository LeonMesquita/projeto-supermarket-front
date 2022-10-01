import { NavBarStyle } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";


export default function NavBar(){
    let location = useLocation();
    let navigate = useNavigate();

    return(
        location.pathname === '/' || location.pathname === '/sign-up' ? null :
    
        <NavBarStyle>
            <h1>dewdfwefewfe</h1>
        </NavBarStyle>
    

    );
}