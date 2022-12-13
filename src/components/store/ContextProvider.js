import { useEffect, useState } from "react";
import ContextApi from "./ContextApi";
import axios from "axios";

// const useMountEffect = (fun) => useEffect(fun, [])

function ContextProvider(props) {
  const [items, setItems] = useState([]);
  const loginToken = localStorage.getItem("token");
  const [isLoginToken, setIsLoginToken] = useState(loginToken);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    msg: false,
    title: "",
  });
  let userName = "";
  for (let n of isLoginToken) {
    if (n === "@") break;
    else userName += n;
  }
  useEffect(() => {
    async function getdata() {
      setLoading(true)
      if (userName !== undefined) {
        try {
          const res = await axios.get(
            `https://crudcrud.com/api/de62383e6a414eb082895ff7ff2a9bd6/${userName}`
          );
          let itemarr = [];
          let tempAmount = 0;
          for (var i = 0; i < res.data.length; i++) {
            itemarr.push(res.data[i]);
            tempAmount += res.data[i].price;
          }
          setItems(itemarr);
          setAmount(tempAmount);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false)
    }
    getdata();
  }, []);

  const userIsLogin = !!isLoginToken;
  async function addItemToCardHandler(item) {
    setLoading(true)
    const itemInd = items.findIndex((itm) => item.id === itm.id);
    if (itemInd !== -1) return alert("This item is already added to the cart");
    try {
      const res = await axios.post(
        `https://crudcrud.com/api/de62383e6a414eb082895ff7ff2a9bd6/${userName}`,
        item
      );
      const updatedItems = [...items, res.data];
      setItems(updatedItems);
    } catch (err) {
      console.log(err);
    }

    // const updatedItems = [...items, item];
    // setItems(updatedItems);
    const updatedAmount = amount + item.price;
    setAmount(updatedAmount);
    setMessage({ msg: true, title: item.title });
    setTimeout(() => {
      setMessage({ msg: false, title: "" });
    }, 3000);
    setLoading(false)
  }

  function isLoginHandler(token) {
    localStorage.setItem("token", token);
    setIsLoginToken(true);
  }

  function isLogoutHandler() {
    localStorage.removeItem("token");
    setIsLoginToken(false);
  }

  async function removeItemFromCardHandler(id) {
    setLoading(true)
    if (id === "purchase" && items.length === 0)
      return alert(
        "You have Nothing in Cart , Add some products to purchase !"
      );
    if (id === "purchase") {
      setItems([]);
      setAmount(0);
      alert("Thanks for the purchase");
      return;
    }
    await axios.delete(
      `https://crudcrud.com/api/de62383e6a414eb082895ff7ff2a9bd6/${userName}/${id}`
    );
    const itemInd = items.findIndex((itm) => id === itm._id);
    const updatedAmount = amount - items[itemInd].price;
    setAmount(updatedAmount);
    items.splice(id, 1);
    setLoading(false)
  }
  const CardCtx = {
    items: items,
    totalAmount: amount,
    isLoginfunc: isLoginHandler,
    isLogoutfunc: isLogoutHandler,
    isLogin: userIsLogin,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
    userName: userName,
  };

  return (
    <ContextApi.Provider value={CardCtx}>
      {props.children}
      {message.msg && (
        <div
          className="d-flex justify-content-center position-fixed bg-info"
          style={{
            bottom: "20px",
            fontWeight: "bold",
            right: "20px",
            zIndex: "999",
            margin: "10px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h6>
            Your product:<span className="h5 text-danger">{message.title}</span>{" "}
            is added to the cart
          </h6>
        </div>
      )}
      {loading && <div style={{
        position:"fixed",
        top:"0",
        height:"100vh",
        width:"100vw",
        backgroundColor:"black",
        opacity: "0.6",
        zIndex:"99999",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <h2
          style={{
            fontWeight: "bold",
            color:"white"
          }}
        >
          Loading... please wait
        </h2>
      </div>}
    </ContextApi.Provider>
  );
}

export default ContextProvider;
