import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import  SignIn  from './pages/signin/SignIn';
import  SignUp  from './pages/signup/SignUp';

export default function App() {
  return (
    <>
        
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

