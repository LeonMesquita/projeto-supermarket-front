//
import api from "./api";


export async function AddProductOnCart(body, authorization){
    const response = await api.post("/cart/add", body, authorization);
    return response;
}


export async function getProductsInCart(authorization){
    const response = await api.get("/cart/products", authorization);
    return response;
}


export async function getOneProductInCart(authorization, productId){
    const response = await api.get(`/cart/products/${productId}`, authorization);
    return response
}

export async function removeItemFromCart(productId, authorization){
    const response = await api.delete(`/cart/${productId}`, authorization);
}



export async function createPurchase(body, authorization){
    const response = await api.post(`/purchase`, body, authorization);
}


export async function resetCart(authorization){
    const response = await api.post('/cart/reset', {}, authorization);
}