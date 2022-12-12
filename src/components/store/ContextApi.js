import React from "react"

const ContextApi = React.createContext({
    items:[],
    totalAmount:0,
    isLoginfunc:()=>{},
    isLogin:false,
    addItem:(item)=>{console.log(item)},
    removeItem:(id)=>{}
})

export default ContextApi;