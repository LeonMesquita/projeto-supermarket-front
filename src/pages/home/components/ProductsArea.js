import styled from 'styled-components';
import { getAllProducts } from '../../../services/products';
import { useState, useEffect, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import priceTag from '../../../assets/images/price_tag.png';
import productContext from '../../../contexts/productContext';
import AddOnCart from './AddOnCart';
import CartArea from './CartArea';




export default function ProductsArea(){
    const {productsList, setProductsList} = useContext(productContext);
    async function handleGetProducts(){
        const response = await getAllProducts();
        setProductsList(response.data)
    };

    const [productIsSelected, setProductIsSelected] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);




    useEffect(() => {
        handleGetProducts();
    }, []);

    return(
        <MainDiv>
            <ProductsDiv>
                {productsList.length === 0 ? null : productsList.map((product, index) =>
                <ProductCard>
                    <img src={product.picture_url} alt=''/>
                    <p>{product.name}</p>
                    <button onClick={() => {
                        setSelectedProduct(product)
                        setProductIsSelected(true)
                    }}>
                        <AiOutlineShoppingCart />
                        <h1>CARRINHO</h1>
                    </button>
                    <div className='price-tag'>
                        <h1>Por apenas</h1>
                        <h2>R${product.price.toFixed(2).replace('.', ',')}</h2>
                    </div>
                </ProductCard>)}

                {productIsSelected ?
            <AddOnCart product={selectedProduct} setProductIsSelected={setProductIsSelected}/>
                : null}
            </ProductsDiv>

            <CartArea>
                
            </CartArea>

 
        </MainDiv>
    );

}

const MainDiv = styled.div`
    display: flex;
    width: 100%;
    
`





const ProductsDiv = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 900px;
    padding-left: 10px;
    padding-right: 10px;
    background: #F4F4F4;

    

    @media (max-width: 900px){
        width: 100%;
    }
    
`

const ProductCard = styled.div`
    height: 230px;
    width: 150px;
    position: relative;
    border: solid 2px transparent;
    margin-left: 10px;
  
    border-radius: 20px;
    
    margin-top: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    &:hover{
        border: solid 2px #1cd60e;
    }

    img{
        height: 70%;
        width: 100%;
        border-radius: 20px;
    }

    p{
        text-align: center;
        font-size: 13px;
        color: grey;
        margin-top: 10px;
    }

    button{
        margin: auto;
        background-color: #bc1212;
        border: none;
        margin-top: 10px;
        margin-bottom: 8px;
        border-radius: 5px;
        width: 80%;
        height: 35px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #e01d1d;
        }

        h1{
            color: white;
            margin-left: 5px;
        }

    }

    svg{
        color: white;
        font-size: 22px;
    }




    .price-tag{
        background-color: #FADD68;
        height: 50px;
        width: 120px;
        position: absolute;
        top: 100px;
        border-bottom-right-radius: 20px;
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        align-items: center;


        h1{
            font-weight: 900;
            margin-top: 5px;
            margin-bottom: 8px;
            
        }
    }
`