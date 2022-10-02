import api from "./api";


export async function getProductTypes(){
    const response = await api.get("/types");
    return response;
}


export async function getAllProducts(){
    return await api.get('/products');
}


export async function getProductsByType(typeId){
    return await api.get(`/products/${typeId}`);
}