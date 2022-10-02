import styled from "styled-components";
import { AddProductOnCart } from "../../../services/purchase";
import { useState, useContext } from "react";
import tokenContext from "../../../contexts/tokenContext";
import handleAlert from "../../../handlers/handleAlert";
import { useNavigate } from "react-router-dom";

export default function AddOnCart({product, setProductIsSelected}){
    const [amount, setAmount] = useState(0);
    const {authorization, token} = useContext(tokenContext);
    console.log(authorization)
    const navigate = useNavigate()
    //icon, titleText, text, timer

    async function handleAddProduct(){
        const body = {
            productId: product.id,
            amount
        }
        try{
            const response = await AddProductOnCart(body, authorization);
            if (amount > 0) handleAlert('success', 'Adicionado!', 'O produto foi adicionado ao seu carrinho');
            setProductIsSelected(false);
        }catch(e){
            if(!token){
                handleAlert('error', 'Não autenticado!', 'Você precisa estar logado para adicionar o produto ao carrinho');
                navigate('/');
            }

        }
    }
    return(
        <Container>
            <div className="product-informations">
                <img src={product.picture_url} alt=""/>
                <div className="product-name">
                    <h1>Nome do produto:</h1>
                    <h2>{product.name}</h2>
                    <h1>Preço:</h1>
                    <h3>R${product.price.toFixed(2)} à vista</h3>
                </div>
            </div>

            <div className="quantity-div">
                <h1>Quantidade:</h1>
                <button onClick={() => {
                    if(amount > 0) setAmount(amount-1)
                }}>-</button>
                <h2>{amount}</h2>
                <button className="add-button" onClick={() => {
                    setAmount(amount+1)
                }}>+</button>
            </div>

           
            
            <div className="buttons-area">
                <button className="add-button" onClick={() => handleAddProduct()}>Adicionar ao carrinho</button>
                <button onClick={() => setProductIsSelected(false)}>Voltar</button>
            </div>
        </Container>
    );
}


const Container = styled.div`
    min-height: 100vh;
    width: 50%;
    min-width: 500px;
   
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    @media (max-width: 500px){
        min-width: 100%;
    }

    img{
        height: 300px;
        width: 250px;
        border: solid 1px black;
        border-radius: 20px;
        margin-left: 20px;
        margin-top: 50px;
        padding: 10px;
    }

    .product-informations{
        display: flex;


    }

    .product-name{
        margin-top: 100px;
        
        h1{
            font-weight: 700;
            font-size: 20px;
            
            margin-bottom: 10px;
            
        }

        h2, h3{
            color: #4A4A4A;
            margin-bottom: 50px;
        }

        h3{
            font-size: 25px;
        }
        margin-left: 10px;
    }


    .quantity-div{
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-top: 50px;
        h1{
            margin-right: 20px;
            font-weight: 700;
            font-size: 22px;
        }

        button{
            background-color: #e01d1d;
            border: none;
            border-radius: 5px;
            height: 40px;
            width: 50px;
            font-size: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: white;
            cursor: pointer;

            &:hover{
                background:  #f90707;
            }
        }

        .add-button{
            background:  #1cd60e;
            &:hover{
                background:  #33ea23;
            }
        }

        h2{
            margin-left: 7px;
            margin-right: 7px;
            font-size: 25px;
        }

    }


    .buttons-area{
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: 50px;



        button{
            margin: auto;
            width: 70%;
            max-width: 300px;
            margin-bottom: 30px;
            height: 50px;
            border-radius: 10px;
            cursor: pointer;
            border: none;
            background-color: #e01d1d;
            color: white;
            font-weight: 700;
            font-size: 20px;
            &:hover{
                background:  #f90707;
            }
            
        }

        .add-button{
            background:  #1cd60e;
            
            
            &:hover{
                background:  #33ea23;
            }
        }

    }
    
`