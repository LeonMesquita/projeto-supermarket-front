import { useState, useContext } from "react";
import productContext from "../../contexts/productContext";
import tokenContext from "../../contexts/tokenContext";
import styled from "styled-components";
import CartProductTile from "../home/components/CartProductTile";
import { removeItemFromCart } from "../../services/purchase";
import handleGetCartProducts from "../../handlers/handleGetCartProducts";


import { BsTrash } from "react-icons/bs";
import FinishButton from "../home/components/FinishButton";
import ConfirmationDialog from "../../components/ConfirmationDialog";


export default function CartPage(){
    const {cartProducts, setCartProducts} = useContext(productContext);
    const {authorization} = useContext(tokenContext);
    const [showDialog, setShowDialog] = useState(false);


    function confirm(productId){
        setShowDialog(true);

    }



    async function handleRemoveItem(productId){
        console.log(productId)
        try{
            const promise = await removeItemFromCart(productId, authorization);
            handleGetCartProducts(authorization, setCartProducts);
        }catch(e){

        }
    }
    return(
        <Page>
            {cartProducts.map((product) => <Tile>
                <CartProductTile product={product}/>
                <DeleteButton onClick={() => handleRemoveItem(product.product_id)}>
                    <BsTrash />
                </DeleteButton>
            </Tile>)}

            <Button>
                    <FinishButton onClick={() => setShowDialog(true)}/>
            </Button>

            
        </Page>
    )
}

const Button = styled.div`
    margin: auto;
   
    width: 100%;
    position: fixed;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;


    button{
        width: 400px;
    }

    @media (max-width: 420px){
        width: 90%;
    }
`


const Page = styled.div`
    
    margin-top: 100px;
    padding-left: 10px;
    padding-right: 10px;
`
const Tile = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 700px;
    
    div{
        width: 100%;
        margin-top: 0;
        
    }
`

const DeleteButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: #bc1212;
    border: none;
    border-radius: 7px;
    cursor: pointer;

    &:hover{
        background-color: #f90707;
    }

    svg{
        color: white;
        font-size: 20px;
    }
`