import styled from "styled-components";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import UserOptions from "./UserOptions";
import { useNavigate, useLocation } from "react-router-dom";

export default function UserArea(){
    const [showUserOptions, setShowUserOptions] = useState(false);
    let navigate = useNavigate();

    return(
        <>
            <MainDiv>
                <AiOutlineShoppingCart onClick={() => navigate('/cart')}/>
                <BsPerson onClick={() => setShowUserOptions(true)}/>
            </MainDiv>
            {showUserOptions ? <UserOptions setShowUserOptions={setShowUserOptions}/> : null}
        </>
 
    );
}

const MainDiv = styled.div`
    height: 100%;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: lightblue; */
    padding: 20px;


    svg{
        font-size: 28px;
        color: white;
        cursor: pointer;
        transition: color 0.3s;

        &:hover{
            color: #bc1212;
        }
    }
`