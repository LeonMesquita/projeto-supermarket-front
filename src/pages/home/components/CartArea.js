import styled from "styled-components";
import { getProductsInCart } from "../../../services/purchase";
import { useState, useContext, useEffect } from "react";
import tokenContext from "../../../contexts/tokenContext";
import productContext from "../../../contexts/productContext";
import CartProductTile from "./CartProductTile";
import handleGetCartProducts from "../../../handlers/handleGetCartProducts";



export default function CartArea(){
    const {authorization} = useContext(tokenContext);
    const [productsList, setProductsList] = useState([]);
    const {cartProducts, setCartProducts} = useContext(productContext);

    useEffect(() => {
         handleGetCartProducts(authorization, setCartProducts);
    }, []);
    return(
        <CartDiv>
            <h1>Seus produtos no carrinho</h1>
            {cartProducts.length === 0 ? <p>Seu carrinho está vazio :(</p> :
            cartProducts.map((product, index) => 
            <CartProductTile product={product}/>
            )
            }
        </CartDiv>
    );
}


const CartDiv = styled.div`
    height: 400px;
    width: 350px;
    background-color: #5ec45e;
    margin-top: 50px;
    margin-right: 20px;
    border-radius: 10px;


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


    @media (max-width: 580px){
        display: none;
    }
`