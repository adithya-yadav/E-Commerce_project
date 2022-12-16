import { useEffect, useState } from "react";
import ContextApi from "./ContextApi";
import axios from "axios";
import "./Spinner.css";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const loginToken = localStorage.getItem("token");
  const [userName, setUserName] = useState(
    loginToken ? loginToken.replace("@", "").replace(".", "") : null
  );
  const [isLoginToken, setIsLoginToken] = useState(loginToken);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    msg: false,
    title: "",
  });
  useEffect(() => {
    async function getdata() {
      setLoading(true);
      if (userName !== null) {
        try {
          const res = await axios.get(
            `https://crudcrud.com/api/268751bd882944a28b8a978eb90daf59/${userName}`
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
      setLoading(false);
    }
    getdata();
  }, [isLoginToken, userName]);

  const userIsLogin = !!isLoginToken;
  const addItemToCardHandler = async (item) => {
    setLoading(true);
    const itemInd = items.findIndex((itm) => item.id === itm.id);
    if (itemInd !== -1) {
      setLoading(false);
      return alert("This item is already added to the cart");
    }
    try {
      const res = await axios.post(
        `https://crudcrud.com/api/268751bd882944a28b8a978eb90daf59/${userName}`,
        item
      );
      const updatedItems = [...items, res.data];
      setItems(updatedItems);
    } catch (err) {
      console.log(err.message);
    }

    const updatedAmount = amount + item.price;
    setAmount(updatedAmount);
    setMessage({ msg: true, title: item.title });
    setTimeout(() => {
      setMessage({ msg: false, title: "" });
    }, 3000);
    setLoading(false);
  };

  const isLoginHandler = (token) => {
    setUserName(token.replace("@", "").replace(".", ""));
    localStorage.setItem("token", token);
    setIsLoginToken(true);
  };

  const isLogoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoginToken(false);
  };

  const removeItemFromCardHandler = async (id) => {
    setLoading(true);
    if (id === "purchase" && items.length === 0) {
      setLoading(false);
      return alert(
        "You have Nothing in Cart , Add some products to purchase !"
      );
    }
    if (id === "purchase") {
      setItems([]);
      setAmount(0);
      alert("Thanks for the purchase");
      setLoading(false);
      return;
    }
    await axios.delete(
      `https://crudcrud.com/api/268751bd882944a28b8a978eb90daf59/${userName}/${id}`
    );
    const itemInd = items.findIndex((itm) => id === itm._id);
    const updatedAmount = amount - items[itemInd].price;
    setAmount(updatedAmount);
    items.splice(id, 1);
    setLoading(false);
  };
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
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p className="loading_message">Loading... please wait</p>
        </div>
      )}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
