import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import  SignIn  from './pages/signin/SignIn';
import  SignUp  from './pages/signup/SignUp';
import productContext from './contexts/productContext';
import tokenContext from './contexts/tokenContext';
import { useState } from 'react';
import CartPage from './pages/cart/CartPage';
import AddressForm from './pages/address/AddressForm';
import ConfirmOrder from './pages/cart/ConfirmOrder';

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productIsSelected, setProductIsSelected] = useState(false);

  const [token, setToken] = useState(null);


  const authorization = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}
  return (
    <tokenContext.Provider value={{token, setToken, authorization}}>
      <productContext.Provider value={{productsList, setProductsList,
        cartProducts, setCartProducts, selectedProduct, setSelectedProduct,
        productIsSelected, setProductIsSelected}}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/address' element={<AddressForm />}/>
            <Route path='/confirm' element={<ConfirmOrder />} />
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </tokenContext.Provider>


  );
}

