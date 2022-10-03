import {getProductsInCart} from '../services/purchase';


async function handleGetCartProducts(authorization, setCartProducts){
    try{
        const response = await getProductsInCart(authorization);
        setCartProducts(response.data);

    }catch(e){

    }
}


export default handleGetCartProducts;