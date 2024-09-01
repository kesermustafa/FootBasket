
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCart} from "./redux/actions/basketAction.js";


function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
    }, [])

  return (
     <BrowserRouter>
         <Header />
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/cart" element={<Cart/>} />
             <Route path="/restaurant/:id" element={<Restaurant/>} />
         </Routes>
     </BrowserRouter>
  )
}

export default App
