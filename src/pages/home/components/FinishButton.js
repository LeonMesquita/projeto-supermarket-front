import styled from "styled-components";
import { useState, useContext } from "react";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import ConfirmOrder from "../../cart/ConfirmOrder";
import { useNavigate } from "react-router-dom";
import productContext from "../../../contexts/productContext";


export default function FinishButton(){
    const [showDialog, setShowDialog] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const {cartProducts, setCartProducts} = useContext(productContext)
    const navigate = useNavigate();

    return(
       <>
        <Button onClick={() => navigate('/confirm')} disabled={cartProducts.length === 0 ? true : false}
        background={cartProducts.length === 0 ? 'grey' : '#5ec45e'}
        hoverBackground={cartProducts.length === 0 ? 'grey' : '#33ea23'}
        >
            Finalizar Pedido
        </Button>
       </>
    )
}



const Button = styled.button`
    background-color: ${props => props.background};
    border: none;
    width: 100%;
    margin-top: 15px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    height: 50px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
                background:  #33ea23;
                background: ${props => props.hoverBackground};
            }



`