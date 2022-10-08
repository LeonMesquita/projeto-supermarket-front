
import api from "./api";


export async function getAddresses(authorization){
    const response = await api.get('/address', authorization);
    return response;
}


export async function createAddress(body, authorization){
    const response = await api.post('/address', body, authorization);
}