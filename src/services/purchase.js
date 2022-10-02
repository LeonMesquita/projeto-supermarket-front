//
import api from "./api";


export async function AddProductOnCart(body, authorization){
    const response = await api.post("/cart/add", body, authorization);
    return response;
}