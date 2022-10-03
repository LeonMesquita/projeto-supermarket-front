import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import  SignIn  from './pages/signin/SignIn';
import  SignUp  from './pages/signup/SignUp';
import productContext from './contexts/productContext';
import tokenContext from './contexts/tokenContext';
import { useState } from 'react';

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [token, setToken] = useState(null);


  const authorization = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}
  return (
    <tokenContext.Provider value={{token, setToken, authorization}}>
      <productContext.Provider value={{productsList, setProductsList, cartProducts, setCartProducts}}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/home' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </tokenContext.Provider>


  );
}

