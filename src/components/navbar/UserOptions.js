import styled from "styled-components";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import { BiLogOut } from "react-icons/bi";


export default function UserOptions({setShowUserOptions}){
    const navigate = useNavigate()
    return(
        <MainDiv>
            <LeftDiv onClick={() => setShowUserOptions(false)}>

            </LeftDiv>
            <Options>
                <OptionTile>
                    <BsPerson />
                    <h1>Configurações de Perfil</h1>
                </OptionTile>
                <OptionTile onClick={() => {
                    setShowUserOptions(false)
                    navigate('/address')
                }}>
                    <AiOutlineHome />
                    <h1>Meus Endereços</h1>
                </OptionTile>
                <OptionTile onClick={() => navigate('/')}>
                    <BiLogOut />
                    <h1>Logout</h1>
                </OptionTile>

            </Options>
        </MainDiv>
    );
}





const MainDiv = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100vh;
    /* background-color: lightblue; */

`


const Options = styled.div`
    background-color: white;
    min-height: 100%;
    min-width: 250px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    padding-top: 20px;
    padding-right: 10px;
`

const OptionTile = styled.div`
    display: flex;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    align-items: center;


    &:hover{
        background-color: grey;
    }

    svg{
        margin-right: 5px;
        font-size: 20px;
        color: #5ec45e;
    }
`


const LeftDiv = styled.div`
    background-color: grey;
    min-height: 100%;
    width: 100%;
    opacity: 0.7;
`