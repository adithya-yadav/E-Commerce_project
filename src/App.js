import Cart from "./components/Cart/Cart"
import {  useState } from "react";
import Nav from "./components/Nav/Nav";
import ContextProvider from "./components/store/ContextProvider";


function App() {
  const [showCart,setShowCart]=useState(false)

 function openCart(){
  setShowCart(true)
 }
 function closeCart(){
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
