import { NavBarStyle } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../../pages/home/components/SearchBar";
import UserArea from "./UserArea";
import LogoArea from "./LogoArea";
import styled from "styled-components";


export default function NavBar(){
    let location = useLocation();
    let navigate = useNavigate();

    return(
        location.pathname === '/' || location.pathname === '/sign-up' ? null :
    
        <NavBarStyle>
            <LogoArea />
                <NavSearch>
                    <SearchBar/>
                </NavSearch>
                
          
            
            <UserArea />
            
        </NavBarStyle>
    

    );
}


const NavSearch = styled.div`
    @media (max-width: 760px){
        display: none;
    }
`