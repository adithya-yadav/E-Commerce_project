import { NavLink } from "react-router-dom";

function NavHeaders() {
  return (
    <>
      <NavLink className="text-white text-decoration-none h4" to="/Home">Home</NavLink>
      <NavLink className="text-white text-decoration-none h3" to="/Store">Store</NavLink>
      <NavLink className="text-white text-decoration-none h4" to="/About">About</NavLink>
      <NavLink className="text-white text-decoration-none h4" to="/Contact">Contact</NavLink>
    </>
  );
}

export default NavHeaders;
