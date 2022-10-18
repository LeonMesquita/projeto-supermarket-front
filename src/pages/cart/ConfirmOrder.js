import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import productContext from "../../contexts/productContext";
import tokenContext from "../../contexts/tokenContext";
import { getAddresses } from "../../services/user";
import { createPurchase, resetCart } from "../../services/purchase";
import { useNavigate } from "react-router-dom";
import handleAlert from "../../handlers/handleAlert";
import {Oval } from  'react-loader-spinner'


export default function ConfirmOrder(){
    const {cartProducts} = useContext(productContext);
    const {authorization} = useContext(tokenContext);
    const [addressList, setAddressList] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    let totalPrice = 0;
    cartProducts.forEach(product => totalPrice += (product.price * product.amount));

    async function handleGetAddress(){
        try{
            const response = await getAddresses(authorization);
            setAddressList(response.data);
            
        }catch(e){

        }
       setIsLoading(false);
    }

    async function handleCreatePurchase(){
        const body = {
            total_price: totalPrice,
            address_id: selectedAddress
        }
        try{
            const response = await createPurchase(body, authorization)
            handleAlert('success', 'sucesso', 'Compra efetuada!')
            const promise = await resetCart(authorization);
            navigate('/home')
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
                {addressList.length === 0 && !isLoading? 
                <>
                    <p>Você não possui nenhum endereço cadastrado</p>
                    <button onClick={() => navigate('/address')}>Adicionar endereço</button>
                </>
                :
                <>
                <AddressArea>
                    {
                        isLoading ? 
                        <Oval 
                        height="70"
                        width="70"
                        color='#5ec45e'
                        secondaryColor='grey'
                        ariaLabel='loading'
                        />
                        : 
                        addressList.map(address =>
                            <Tile tileBackground={selectedAddress === address.id ? "#5ec45e" : "transparent"} onClick={() => setSelectedAddress(address.id)}>
                                {address.nickname}
                            </Tile>)
                    }
                
                </AddressArea>
               
                    <button className="cancel-button" onClick={() => navigate('/home')}>Cancelar</button>
                    <button onClick={handleCreatePurchase}>Confirmar</button>
                </>
                }

                
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

    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;


`


const Tile = styled.div`
        width: 100%;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 3px;
        margin-top: 5px;
        border: solid 1px #5ec45e;
        cursor: pointer;
        border-radius: 5px;
        background-color: ${props => props.tileBackground};
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
        padding-bottom: 10px;
        
        width: 90%;
        max-width: 597px;
        
        max-width: 500px;
        /* height: 150px; */
        justify-content: space-evenly;
        background: #333333;
        background-color: white;
        border-radius: 20px;

    }
    h1{
        font-weight: 700;
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    h2, h3{
        align-self: baseline;
        margin-left: 25px;
        margin-bottom: 10px;
        padding-left: 5px;
    }


    p{
        text-align: center;
        color: grey;
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 25px;
        margin-left: 10px;
        margin-right: 10px;
    }

    /* span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;

    } */

    button{
        width: 90%;
        height: 35px;
        background-color: #5ec45e;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        font-weight: 700;
        margin-top: 10px;
        

        &:hover{
            background:  #33ea23;
        }
    }


    .cancel-button{
        
        background-color: #bc1212;

        &:hover{
        background-color: #f90707;
        }
    }

    



`