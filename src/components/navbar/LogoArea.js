import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";


export default function LogoArea(){
    const navigate = useNavigate()
    return(
        <MainDiv>
            <img src={logo} alt="logo"  onClick={() => navigate('/home')}/>
           

        </MainDiv>
    );
}

const MainDiv = styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    img{
        width: 130px;
        height: 70%;
        cursor: pointer;

        border-radius: 10px;
    }
`