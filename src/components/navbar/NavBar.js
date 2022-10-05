import { NavBarStyle } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../../pages/home/components/SearchBar";
import UserArea from "./UserArea";
import LogoArea from "./LogoArea";


export default function NavBar(){
    let location = useLocation();
    let navigate = useNavigate();

    return(
        location.pathname === '/' || location.pathname === '/sign-up' ? null :
    
        <NavBarStyle>
            <LogoArea />
            <SearchBar />
            <UserArea />
            
        </NavBarStyle>
    

    );
}