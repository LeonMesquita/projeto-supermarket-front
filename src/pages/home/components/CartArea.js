import styled from "styled-components";
import { getProductsInCart } from "../../../services/purchase";
import { useState, useContext, useEffect } from "react";
import tokenContext from "../../../contexts/tokenContext";
import productContext from "../../../contexts/productContext";
import CartProductTile from "./CartProductTile";
import handleGetCartProducts from "../../../handlers/handleGetCartProducts";
import FinishButton from "./FinishButton";



export default function CartArea(){
    const {authorization} = useContext(tokenContext);
    const [productsList, setProductsList] = useState([]);
    const {cartProducts, setCartProducts} = useContext(productContext);

    useEffect(() => {
         handleGetCartProducts(authorization, setCartProducts);
    }, []);
    return(
        <MainDiv>
            <CartDiv>
                <h1>Seus produtos no carrinho</h1>
                {cartProducts.length === 0 ? <p>Seu carrinho está vazio :(</p> :
                cartProducts.map((product, index) => 
                <CartProductTile product={product}/>
                )
                }
                <div className="container"></div>
            </CartDiv>
            <FinishButton />
        </MainDiv>
    );
}

const MainDiv = styled.div`
    height: 460px;
    width: 350px;
    margin-right: 20px;
    @media (max-width: 580px){
        display: none;
    }

    

    display: flex;
    flex-direction: column;
    align-items: center;

   
`


const CartDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #5ec45e;
    margin-top: 50px;
   
    border-radius: 10px;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.25);
    overflow-y: scroll;
    padding-bottom: 20px;
    position: relative;

    /* .container{
        height: 10px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #5ec45e;
    } */



    h1{
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        margin-top: 10px;
        
    }

    p{
        margin-top: 130px;
        color: white;
        font-weight: 900;
        text-align: center;
        padding: 10px;
    }



`