import { Fragment, useContext } from "react";
import { Button , Table } from "react-bootstrap";

import ContextApi from "../store/ContextApi";

const Cart = (props) => {
  const cartCtx = useContext(ContextApi)
  return (
    <Fragment>
      <div
        className="bg-white border-3px position-fixed mt-5 "
        style={{
          top: "50px",
          height: "95%",
          right: "0",
          zIndex: "999",
          margin:"10px",
          padding:"20px"
        }}
      >
        <div className=" mg-2 d-flex justify-content-end">
          <Button variant="light"  onClick={props.onClick}>X</Button>
        </div>
        <h1 className=" mg-2 d-flex justify-content-center">Cart</h1>
        <div className=" mg-2 d-flex justify-content-center">
          <Table responsive>
            <thead className="h3">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.items.map((item) => {
                return (
                  <tr key={item.title}>
                    <td>
                      <img src={item.imageUrl} height="80" alt="img" />
                      {item.title}
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        defaultValue="1"
                        className="col-1 me-3 border-info align-items-center"
                      />
                      <Button variant="danger">Remove</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-end d-flex align-items-end">
          <h3 className="me-3 d-flex align-items-end">Total</h3>
          <span className="mb-2">$22.98</span>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="info">
            Purchase
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
