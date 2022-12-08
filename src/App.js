import Cart from "./components/Cart/Cart"
import { useState } from "react";
import Nav from "./components/Nav/Nav";

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
      {showCart && <Cart onClick={closeCart}/>}

        <Nav onClick={openCart}/>
        
    </>
  );
}

export default App;
