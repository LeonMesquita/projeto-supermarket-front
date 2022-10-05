import styled from "styled-components";

export default function FinishButton(){
    return(
        <Button>
            Finalizar Pedido
        </Button>
    )
}



const Button = styled.button`
    background-color: #5ec45e;
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
            }



`