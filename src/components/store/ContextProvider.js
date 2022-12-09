import { useState } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = (props)=>{
    const [amount,setAmount] = useState(0)
    const [items,setItems]= useState([])
    function addItemToCardHandler(item){
        const updatedItems = [...items,item]
        setItems(updatedItems)
        const updatedAmount = amount+1
        setAmount(updatedAmount)
    }
    console.log(items)
    function removeItemFromCardHandler(){
    }

    const CardCtx={
        items:items,
        totalAmount:amount,
        addItem:addItemToCardHandler,
        removeItem:removeItemFromCardHandler
    }

    return (
        <ContextApi.Provider value={CardCtx}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;