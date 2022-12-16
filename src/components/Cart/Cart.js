import { Fragment, useContext } from "react";
import { Button, Table } from "react-bootstrap";
import ContextApi from "../store/ContextApi";
import CartList from "./CartList";
import './Cart.css';

const Cart = (props) => {
  const cartCtx = useContext(ContextApi);
  const showCart= cartCtx.isLogin
  function purchaseHaldler() {
    cartCtx.removeItem("purchase");
  }
  return (
    <>
      {showCart && (
        <Fragment>
          <div
            className= "cart bg-white border-3px position-fixed mt-5"
          >
            <div className=" mg-2 d-flex justify-content-end">
              <Button variant="light" onClick={props.onClick}>
                X
              </Button>
            </div>
            <h1 className=" mg-2 d-flex justify-content-center">Cart</h1>
            <div className=" mg-2 ms-5 d-flex justify-content-center">
              <Table responsive>
                <thead className="h3">
                  <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>
                <CartList />
              </Table>
            </div>
            <div className="d-flex justify-content-end d-flex align-items-end me-5">
              <h3 className="me-3 d-flex align-items-end">Total</h3>
              <span className="mb-2">$ {cartCtx.totalAmount}</span>
            </div>
            <div className="d-flex justify-content-center">
              <Button onClick={purchaseHaldler} variant="info">
                Purchase
              </Button>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Cart;
