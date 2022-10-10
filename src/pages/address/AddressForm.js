import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { getAddresses, createAddress } from "../../services/user";
import tokenContext from "../../contexts/tokenContext";
import handleAlert from "../../handlers/handleAlert";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../../components/LoaderSpinner";
import { handleIsEmpty } from "../../handlers/handleAuthAlerts";

export default function AddressForm(){
    const [addressList, setAddressList] = useState([]);
    const {authorization, token} = useContext(tokenContext);
    const [showForm, setShowForm] = useState(false);
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [nickname, setNickname] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function handleGetAddress(){
        try{
            const response = await getAddresses(authorization);
            setAddressList(response.data);
            
        }catch(e){

        }
    }

    function handleAuthenticationError(message){
        if(!token){
            handleAlert('error', 'Não autenticado!', `${message}`);
            navigate('/');
        }
    }





    async function handleCreateAddress(e){
        e.preventDefault();
        if(street === '' || number === '' || district === '' || nickname === '') handleIsEmpty();
        const body = {
            street,
            number: Number(number),
            district,
            nickname
        }

        setIsLoading(true)

        try{
            const response = await createAddress(body, authorization);
            handleGetAddress();
            setStreet('');
            setNumber('');
            setDistrict('');
            setNickname('');
            setIsLoading(false)
            setShowForm(false);

        }catch(e){
            setIsLoading(false)
        }


    }

    useEffect(() => {
        handleGetAddress();
    },[])
    return(
        <Page>
            {addressList.length === 0 ? 
            <>
                <h1>Você não tem nenhum endereço cadastrado</h1>
            </> : 
            addressList.map((address) => 
            <AddressTile>
                <p>{address.nickname}</p>
                <h2>{address.street} N°{address.number}, bairro {address.district}</h2>
            </AddressTile>)
            }

            <AddButton>
                <button onClick={() => {
                    handleAuthenticationError('Você precisa estar logado para adicionar um endereço');
                    setShowForm(true)
                }}>
                    Adicionar endereço
                </button>
                
            </AddButton>

            {showForm ? 
            <Form>
                <form onSubmit={handleCreateAddress}>
                    <input disabled={isLoading ? true : false} placeholder="Nome da rua" value={street} onChange={(e) => setStreet(e.target.value)}/>
                    <input type='number' disabled={isLoading ? true : false} placeholder="Número" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    <input disabled={isLoading ? true : false} placeholder="Bairro" value={district} onChange={(e) => setDistrict(e.target.value)}/>
                    <input disabled={isLoading ? true : false} placeholder="Apelido (ex: casa)" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                    <button disabled={isLoading ? true : false}>{isLoading ? <LoaderSpinner /> : `Confirmar`}</button>
                    <button className="cancel-button" onClick={() => setShowForm(false)}>Cancelar</button>
                </form>
            </Form> 
            : null}
        </Page>
    );
}


const Form = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(120,120,120, 0.7);
    

    



    form{
        width: 80%;
        padding-top: 30px;
        padding-bottom: 20px;

        max-width: 500px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        background-color: white;
    }

    input{
        width: 90%;
        margin-bottom: 25px;
        height: 30px;
        border: solid 1px #5ec45e;
        border-radius: 5px;
        text-indent: 10px;
        ::placeholder{
            font-style: italic;
        }
    }

    button{
        width: 90%;
        height: 35px;
        background-color: #5ec45e;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        font-weight: 700;
        

        &:hover{
            background:  #33ea23;
        }
    }


    .cancel-button{
        margin-top: 10px;
        background-color: #bc1212;

        &:hover{
        background-color: #f90707;
        }
    }
`




const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    h1{
        font-size: 20px;
        text-align: center;
        color: grey;
        font-weight: 700;
        padding-left: 10px;
        padding-right: 10px;
    }
`


const AddressTile = styled.div`
    width: 90%;
    max-width: 500px;
    min-height: 50px;
    border: solid 1px green;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
   
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        font-size: 10px;
        color: grey;
        font-weight: 700;
        margin-top: 3px;
    }

`


const AddButton = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0px;
    background: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: center;


  





    button{
       
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        width: 90%;
        max-width: 300px;
        background-color: #5ec45e;
        height: 45px;
        border: none;
        color: white;
        font-size: 20px;
        &:hover{
        background:  #33ea23;
        }
    }
`