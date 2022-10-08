import styled from "styled-components";
import { useState, useContext } from "react";
import {getProductsByName} from '../../../services/products';
import productContext from "../../../contexts/productContext";

export default function SearchBar(){
    const [findProducts, setFindProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const {productsList, setProductsList, selectedProduct, setSelectedProduct,
        productIsSelected, setProductIsSelected} = useContext(productContext);

    async function handleChangeInput(e){
        setInputValue(e.target.value);
        

        try{
            const response = await getProductsByName(e.target.value);
            setFindProducts(response.data)
        }catch(e){

        }

    }

    return(
        <>
            <InputArea>
            <Input placeholder="Pesquise um produto" value={inputValue} onChange={(e) => handleChangeInput(e)}>
            </Input>
            {findProducts.length > 0 ?
            <ResultDiv>
                {findProducts.map((product) => <h1 onClick={() => {
                    setSelectedProduct(product);
                    setProductIsSelected(true);
                    setFindProducts([]);
                    setInputValue('');
                }}>{product.name}</h1>)}
            </ResultDiv> : null}
            </InputArea>
        </>
    );
}

const InputArea = styled.div`
    position: relative;


`

const Input = styled.input`
    margin: auto;
    height: 35px;
    width: 350px;
    border: none;
    border-radius: 5px;

    @media (max-width: 375px){
        width: 90vw;
    }
`


const ResultDiv = styled.div`
    width: 350px;
    height: 100px;
    background-color: white;
    position: absolute;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-top: solid 1px grey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 7px;
    overflow-y: scroll;
    


    h1{
        
        font-size: 13px;
        color: grey;
        font-weight: 700;
        cursor: pointer;
        min-height: 20px;
        padding-left: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        
        

        &:hover{
            background-color: lightgrey;
        }
    }

   

    @media (max-width: 760px){
        width: 350px;
    }

    @media (max-width: 375px){
        width: 90vw;
    }
`