import TypesArea from "./components/TypesArea";
import { useState, useEffect } from "react";
import ProductsArea from "./components/ProductsArea";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
export default function Home(){


    return(
        <>
        <Search>
            <SearchBar />
        </Search>
        <TypesArea>
        </TypesArea>

        <ProductsArea />
        

        </>
    )
}

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    input{
            border: solid 2px #5ec45e;
        }
    @media (min-width: 760px){
        display: none;
    }
`