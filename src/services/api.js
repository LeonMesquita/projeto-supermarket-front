import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config()
//https://projeto-autoral.onrender.com

const instance = axios.create({
  baseURL: "http://localhost:5000"
  
});

export default instance;