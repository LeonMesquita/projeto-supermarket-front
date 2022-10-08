import styled from 'styled-components';


export default function ConfirmationDialog({message, onclickYes, onclickNo}){

    return(
        <Dialog>
            <div>
                <h3>{message}</h3>
            <span>
                <button onClick={onclickNo} >Não</button>
                <button onClick={onclickYes} className='yesbutton'>Sim</button>
            </span>

            </div>

        </Dialog>
    );
}


const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1;

    div{
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
        height: 210px;
        max-width: 500px;
        max-height: 500px;
        justify-content: space-evenly;
        background: #333333;
        border-radius: 20px;

    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;

    }

    button{
        width: 134px;
        height: 37px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;

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

    h3{
        text-align: center;
        margin-top: 45px;
        font-family: 'Roboto',sans-serif;
        font-weight: normal;
        color: white;
        font-size: 23px;
    }

    @media (max-width: 375px){
        button{
            width: 40%;
        }
    }

`