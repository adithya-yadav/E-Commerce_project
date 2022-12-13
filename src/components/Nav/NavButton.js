import { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import ContextApi from "../store/ContextApi";

function NavButton(props) {
  const CardCtx = useContext(ContextApi);
  return (
    <Fragment>
      <Button
        className="m-3 me-1"
        variant="outline-info"
        data-bs-toggle="modal"
        data-bs-target="#modal"
        onClick={props.onClick}
      >
        <div className="text-white">Cart</div>
      </Button>
      <p className="text-info mt-1 mb-5 me-3 ms-0 h5">{CardCtx.items.length}</p>
    </Fragment>
  );
}

export default NavButton;
