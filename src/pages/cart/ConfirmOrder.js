import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import productContext from "../../contexts/productContext";
import tokenContext from "../../contexts/tokenContext";
import { getAddresses } from "../../services/user";

export default function ConfirmOrder(){
    const {cartProducts} = useContext(productContext);
    const {authorization} = useContext(tokenContext);
    const [addressList, setAddressList] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    let totalPrice = 0;
    cartProducts.forEach(product => totalPrice += product.price);

    async function handleGetAddress(){
        try{
            const response = await getAddresses(authorization);
            setAddressList(response.data);
            
        }catch(e){

        }
    }

    useEffect(() => {
        handleGetAddress();
    },[])


    return(
        <Page>
            <div className="container">
                <h1>Confirmar compra</h1>
                <h2>Total a pagar: R${totalPrice.toFixed(2).replace('.', ',')}</h2>
                <h3>Selecione o endereço de entrega:</h3>
                <AddressArea>
                {addressList.map(address =>
                <Tile tileBackground={selectedAddress === address.id ? "#5ec45e" : "transparent"} onClick={() => setSelectedAddress(address.id)}>
                    {address.nickname}
                </Tile>)}
                </AddressArea>
               
                    <button>Cancelar</button>
                    <button>Confirmar</button>
                
            </div>
        </Page>
    )
}

const AddressArea = styled.span`
    max-height: 120px;
    width: 90%;
    overflow-y: scroll;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;


`


const Tile = styled.div`
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 3px;
        margin-top: 5px;
        border: solid 1px #5ec45e;
        cursor: pointer;
        border-radius: 5px;
        background-color: ${props => props.tileBackground};;
        &:hover{
            background-color: #5ec45e;
        }
`



const Page = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    background: rgba(120,120,120, 0.7);
    z-index: 1;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #03223F;
        
        width: 80%;
        max-width: 597px;
        
        max-width: 500px;
        /* height: 150px; */
        justify-content: space-evenly;
        background: #333333;
        background-color: white;
        border-radius: 20px;

    }

    /* span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;

    } */

    button{
        width: 134px;
        height: 37px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        font-family: 'Lato';
        font-weight: 700;
        font-size: 18px;
        color: #1877F2;
    }

    .yesbutton{
        background: #1877F2;
        color: white;
        margin-left: 27px;

    }

    

    @media (max-width: 375px){
        button{
            width: 40%;
        }
    }

`