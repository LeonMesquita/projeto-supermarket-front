import styled from "styled-components";


export default function CartProductTile({product}){
    return(
        <Product>
        <img src={product.picture_url} alt=""/>
        <InfoDiv>
            <h2>Nome</h2>
            <h3>{product.name}</h3>
        </InfoDiv>
        <InfoDiv>
            <h2>Qtd.</h2>
            <h4>{product.amount}</h4>
        </InfoDiv>
        <InfoDiv>
            <h2>Preço</h2>
            <h4>R${product.price.toFixed(2).replace('.', ',')}</h4>
        </InfoDiv>
    </Product>
    );
}















const Product = styled.div`
    height: 50px;
    
    background-color: white;
    margin-top: 20px;
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 7px;


    img{
        height: 100%;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
    
        background-color: red;
    }
`

const InfoDiv = styled.div`
    
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    /* background-color: red; */

    h2, h3, h4{
        font-size: 10px;
        text-align: center;
    }
    h2{
        font-weight: 700;
        margin-top: 3px;
    }

    h3{
        margin-top: 5px;
    }
    h4{
        margin-top: 10px;
    }
`