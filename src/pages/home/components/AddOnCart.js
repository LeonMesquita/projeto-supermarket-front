import styled from "styled-components";
import { AddProductOnCart, getOneProductInCart } from "../../../services/purchase";
import { useState, useContext, useEffect } from "react";
import tokenContext from "../../../contexts/tokenContext";
import productContext from "../../../contexts/productContext";
import handleAlert from "../../../handlers/handleAlert";
import { useNavigate } from "react-router-dom";
import handleAuthenticationError from "../../../handlers/handleAuthenticationError";
import handleGetCartProducts from "../../../handlers/handleGetCartProducts";
import LoaderSpinner from '../../../components/LoaderSpinner';

export default function AddOnCart({product, setProductIsSelected}){
    const [amount, setAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(product.price * amount);
    const {authorization, token} = useContext(tokenContext);
    const {cartProducts, setCartProducts} = useContext(productContext);
    const [isLoading, setIsLoading] = useState(false);
    console.log(authorization)
    const navigate = useNavigate()
    let actualAmount = amount;

    async function handleGetOneProduct(){
        try{
            const promise = await getOneProductInCart(authorization, product.id);
            const prodAmount = promise.data.amount;
            if(prodAmount) {
                setAmount(prodAmount);
                setTotalPrice(product.price * prodAmount);
            }
        }catch(e){

        }
    }

    async function handleAddProduct(){
        const body = {
            productId: product.id,
            amount
        }
        setIsLoading(true);
        try{
            const response = await AddProductOnCart(body, authorization);
            handleGetCartProducts(authorization, setCartProducts);
            if(amount > 0) handleAlert('success', 'Adicionado!', 'O produto foi adicionado ao seu carrinho');
            setProductIsSelected(false);
        }catch(e){
            if(!token){
                handleAlert('error', 'Não autenticado!', 'Você precisa estar logado para adicionar o produto ao carrinho');
                navigate('/');
            }

        }
        setIsLoading(false);

    }

    useEffect(() => {
        handleGetOneProduct();
    },[product]);







    return(
        <MainDiv>
            <LeftDiv onClick={() => setProductIsSelected(false)}>

            </LeftDiv>
            <Container>
                <div className="product-informations">
                    <img src={product.picture_url} alt=""/>
                    <div className="product-name">
                        <h1>Nome do produto:</h1>
                        <h2>{product.name}</h2>
                        <h1>Preço:</h1>
                        <h3>R${product.price.toFixed(2).replace('.', ',')} à vista</h3>
                    </div>
                </div>

                <div className="quantity-div">
                    <h1>Quantidade:</h1>
                    <button onClick={() => {
                        if(amount > 0){
                            setAmount(amount-1);
                            actualAmount--;
                            setTotalPrice(product.price * actualAmount);
                        }
                    }}>-</button>
                    <h2>{amount}</h2>
                    <button className="add-button" onClick={() => {
                        setAmount(amount+1);
                        actualAmount++;
                        setTotalPrice(product.price * actualAmount);
                    }}>+</button>
                </div>

                {amount > 0 ? 
                <p>Preço total: R${totalPrice.toFixed(2).replace('.', ',')}</p>
                
                : null}


                

            
                
                <div className="buttons-area">
                    <button disabled={isLoading} className="add-button" onClick={() => handleAddProduct()}>{isLoading ? <LoaderSpinner /> : 'Adicionar ao carrinho'}</button>
                    <button onClick={() => setProductIsSelected(false)}>Voltar</button>
                </div>
            </Container>
        </MainDiv>
    );
}


const MainDiv = styled.div`
display: flex;
position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
    width: 100%;

`
const LeftDiv = styled.div`
    background-color: grey;
    min-height: 100vh;
    width: 100%;
    opacity: 0.6;
`


const Container = styled.div`
    min-height: 100vh;
    width: 50%;
    min-width: 500px;
   
    background-color: white;

    padding-top: 60px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    

    @media (max-width: 700px){
        min-width: 100%;
        img{
            height: 200px;
        }
    }

    p{
        margin: auto;
        margin-top: 30px;
        
        margin-left: 20px;
        font-size: 20px;
    }

    img{
        height: 300px;
        width: 250px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin-left: 20px;
        border: solid 2px #5ec45e;
        
        padding: 10px;

        /* @media (max-width: 700px){
       
      
            height: 200px;
            width: 170px;
       
    } */



    }

    .product-informations{
        display: flex;


    }

    .product-name{
        margin-top: 50px;
        
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
        margin-top: 70px;



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