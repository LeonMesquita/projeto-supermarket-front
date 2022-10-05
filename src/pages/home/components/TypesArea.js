import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import productContext from '../../../contexts/productContext';
import { getProductTypes, getProductsByType } from '../../../services/products';


export default function TypesArea(){
    const [typesList, setTypesList] =useState([]);
    const {productsList, setProductsList} = useContext(productContext);
    async function handleGetTypes(){
        try{
            const response = await getProductTypes();
            setTypesList(response.data);
        }catch(e){

        }
    };

    async function handleFilterProducts(typeId){
        try{
            const response = await getProductsByType(typeId);
            console.log(response.data)
            setProductsList(response.data);
        }catch(e){
            console.log(e)
        }

    }

    useEffect(() => {
        handleGetTypes();
    }, []);


    return(
        <TypesDiv  className='.sized-box'>
            {typesList.length === 0 ? null : typesList.map((type, index) => 
            <TypeCard onClick={() => handleFilterProducts(type.id)}>
                <img src={type.picture_url} alt=''/>
                <p>{type.name}</p>
            </TypeCard>)}
        </TypesDiv>
    );
}


const TypesDiv= styled.div`
    margin: auto;
    display: flex;
    width: 700px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    overflow-x: scroll;

    @media(max-width: 700px){
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
   
`

//
const TypeCard = styled.div`
    height: 110px;
    width: 100px;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px transparent;
    margin-top: 70px;
    margin-right: 20px;
    

    &:hover{
        border: solid 2px #1cd60e;
    }
    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    p{
        margin-top: 5px;
        margin-bottom: 3px;
    }
    
`;

