import { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import ContextApi from "../store/ContextApi";

function NavButton(props) {
  const CardCtx = useContext(ContextApi)
  return (
    <Fragment>
        <Button
          className="m-3"
          variant="outline-info"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={props.onClick}
        >
          Cart
        </Button>
        <p className="text-info mt-0 mb-5 me-3 ms-0">{CardCtx.totalAmount}</p>
    </Fragment>
  );
}

export default NavButton;
