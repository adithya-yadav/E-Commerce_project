import { Button } from "react-bootstrap";


function NavButton(props) {

  return (
    <>
      <Button
        className="m-3"
        variant="outline-info"
        data-bs-toggle="modal"
        data-bs-target="#modal"
        onClick={props.onClick}
      >
        Cart
      </Button>

    </>
  );
}

export default NavButton;
