import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextApi from "../store/ContextApi";

function NavHeaders() {
  const ctx = useContext(ContextApi);
  function logOutHandler(){
    ctx.isLogoutfunc()
  }
  return (
    <>
      {ctx.isLogin && (
        <>
          <NavLink className="text-white text-decoration-none h4" to="/Home">
            Home
          </NavLink>
          <NavLink className="text-white text-decoration-none h3" to="/Store">
            Store
          </NavLink>
          <NavLink className="text-white text-decoration-none h4" to="/About">
            About
          </NavLink>
          <NavLink className="text-white text-decoration-none h4" to="/Contact">
            Contact
          </NavLink>
          <NavLink className="text-white text-decoration-none h4" onClick={logOutHandler} to="/auth">
            Logout
          </NavLink>
        </>
      )}
     {!ctx.isLogin && <NavLink className="text-white text-decoration-none h4" to="/auth">
        Login
      </NavLink>}
    </>
  );
}

export default NavHeaders;
