import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config()
//https://projeto-autoral.onrender.com
//http://localhost:5000
const instance = axios.create({
  baseURL: "https://projeto-autoral.onrender.com"
  
});

export default instance;