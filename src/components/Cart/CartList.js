import ContextApi from "../store/ContextApi";
import {useContext} from "react";
import { Button } from "react-bootstrap";
import "./CartList.css"

function CartList(props) {
    const cartCtx = useContext(ContextApi)
  return (
    <>
      <tbody>
        {cartCtx.items.map((item) => {
        function removeItemHandler(){
            cartCtx.removeItem(item._id)
        }
          return (
            <tr key={item.title}>
              <td>
                <img
                  src={item.imageUrl}
                  height="80"
                  alt="img"
                  className="rounded-3 me-1"
                />
                {item.title}
              </td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  
                  max="5"
                  className="inputSpinButton col-2 me-3 border-info align-items-center"
                />
                <Button onClick={removeItemHandler} variant="danger">Remove</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default CartList;
