import { useState } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = (props) => {
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState({
    msg:false,
    title:""
  });
  function addItemToCardHandler(item) {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    const updatedAmount = amount + 1;
    setAmount(updatedAmount);
    setMessage({msg:true,title:item.title})
    setTimeout(()=>{
        setMessage({msg:false,title:""})
    },3000)
  }
  function removeItemFromCardHandler() {}
  const CardCtx = {
    items: items,
    totalAmount: amount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <ContextApi.Provider value={CardCtx}>
      {props.children}
      {message.msg && (
        <div className="d-flex justify-content-center position-fixed bg-info" style={{
            bottom: "20px",
            fontWeight:"bold",
            right: "20px",
            zIndex: "999",
            margin:"10px",
            padding:"20px",
            borderRadius:"10px"
          }}>
          <h6>Your product:<span className="h5 text-danger">{message.title}</span> is added to the cart</h6>
        </div>
      )}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
