import Cart from "./components/Cart/Cart"
import {  useState } from "react";
import Nav from "./components/Nav/Nav";
import ContextProvider from "./components/store/ContextProvider";


const App = () => {
  const [showCart,setShowCart]=useState(false)

 const openCart = () => {
  setShowCart(true)
 }
 const closeCart = () => {
  setShowCart(false)
 }
 
 return (
    <>
    <ContextProvider>
      {showCart && <Cart onClick={closeCart}/>}
        <Nav onClick={openCart}/>
    </ContextProvider>
    </>
  );
}

export default App;
