import styled from 'styled-components';
import { getAllProducts } from '../../../services/products';
import { useState, useEffect, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import priceTag from '../../../assets/images/price_tag.png';
import productContext from '../../../contexts/productContext';
import AddOnCart from './AddOnCart';
import CartArea from './CartArea';
import FinishButton from './FinishButton';
import LoaderSpinner from '../../../components/LoaderSpinner';




export default function ProductsArea(){
    const [isLoading, setIsLoading] = useState(true);
    const {productsList, setProductsList, selectedProduct, setSelectedProduct,
        productIsSelected, setProductIsSelected} = useContext(productContext);
    async function handleGetProducts(){
        try{
            const response = await getAllProducts();
            setProductsList(response.data);
            setIsLoading(false)
        }catch(e){

        }
    };






    useEffect(() => {
        handleGetProducts();
    }, []);

    return(
        <MainDiv>

            {isLoading ? <LoaderSpinner loaderType='oval'/> : 
            <>
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

            <Finishbutton>
                <FinishButton />
            </Finishbutton>
            
            </>}


 
        </MainDiv>
    );

}

const MainDiv = styled.div`
    display: flex;
    width: 100%;
    
`



const Finishbutton = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 13px;
    height: 70px;
   
    background-color: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);


    button{
        height: 50px;
        font-size: 30px;
        max-width: 400px;
    }

    @media (min-width: 580px){
        display: none;
    }
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
    padding-bottom: 50px;

    

    @media (max-width: 900px){
        width: 100%;
    }

    @media (max-width: 580px){
        padding-bottom: 120px;
        
    }
    
`

const ProductCard = styled.div`
    padding-top: 10px;
    height: 260px;
    width: 150px;
    position: relative;
    border: solid 2px transparent;
    margin-left: 10px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  
    border-radius: 20px;
    
    margin-top: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    &:hover{
        border: solid 2px #1cd60e;
    }

    img{
        height: 150px;
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
        position: absolute;
        bottom: 8px;
        left: 15px;
        
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