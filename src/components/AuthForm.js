import styled from "styled-components";
import supermarket from '../assets/images/supermarket.webp'


// https://img.freepik.com/premium-photo/shopping-cart-blur-supermarket-background_36078-470.jpg?w=2000


export const AuthForm = styled.div`
    margin: auto;
   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/supermarket-aisle-1.jpg?quality=82&strip=1);
    

    form{
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
       padding-top: 60px;
       padding-bottom: 30px;
        justify-content: center;
        /* box-shadow: -4px 5px 5px 4px rgba(0, 0, 0, 0.25);

        box-shadow: 5px 5px 5px 5px grey; */
    }

    input{
        width: 90%;
        height: 30px;
        margin-bottom: 15px;
        font-style: italic;
        text-indent:15px;
        &::placeholder{
         color: #9F9F9F;
     }
    }

    button{
        width: 90%;
        height: 45px;
        background-color: #1cd60e;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 25px;
        font-weight: 700;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        transition: background-color 0.2s;
        &:hover{
            background: #2bea19;
        }
    }

    a{
        text-decoration: none;
        color: blue;

        &:hover{
            text-decoration: underline;
        }
    }


    @media(max-width: 510px){
        form{
            width: 90%;
        }
    }

`

// const Input = styled.input`
//     width: 85%;
//     height: 65px;
//     background: #FFFFFF;
//     border-radius: 6px;
//     margin-bottom: 15px;
//     border: none;
//     text-indent:15px;
//     color: black;
//     font-family: 'Oswald';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 25px;
//     color: #000000;
//     &::placeholder{
//         color: #9F9F9F;
//     }
//     &:focus {
//         outline: none;
//         border: 2px solid #05e3fc;
//     }
// `