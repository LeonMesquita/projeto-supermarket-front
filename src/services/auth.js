import api from "./api";


export async function signup(body){
    const response = await api.post("/signup", body);
    return response.status;
}


export async function signin(body){
    const response = await api.post("/signin", body);
    return response.data;
}
