import { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ContextApi from "../store/ContextApi";
import NavButton from "./NavButton";

const NavHeaders = (props) => {
  const ctx = useContext(ContextApi);
  const logOutHandler = () => {
    ctx.isLogoutfunc();
  };
  return (
    <>
      {ctx.isLogin && (
        <Navbar
          bg="dark"
          variant="dark"
          style={{
            position: "sticky",
            top: "0",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "10%",
            zIndex: "999",
            borderBottom: "0.1rem solid white",
          }}
        >
          <NavLink
            className="text-white text-decoration-none h4 ms-5"
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink className="text-white text-decoration-none h3" to="/Store">
            Store
          </NavLink>
          <NavLink className="text-white text-decoration-none h4" to="/About">
            About
          </NavLink>
          <div className="d-flex">
            <NavButton onClick={props.onClick} />
            <NavLink
              className="text-info text-decoration-none h4 me-2 ms-3 mt-4"
              onClick={logOutHandler}
              to="/auth"
            >
              Logout
            </NavLink>
          </div>
        </Navbar>
      )}
      {!ctx.isLogin && (
        <NavLink className="text-white text-decoration-none h4" to="/auth">
          Login
        </NavLink>
      )}
    </>
  );
};

export default NavHeaders;
