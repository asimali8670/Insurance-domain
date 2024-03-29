import React from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const location = useLocation();

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "underline",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const isAuthenticated = true;
  const isHomeOrLogin =
    location.pathname === "/" || location.pathname === "/Login";

    const isSignup = location.pathname === "/SignUp"; 

  return (
    <nav className="navbar">
      <img src={logo} alt="logoImg" className="logoImg" />

      <NavLink style={navLinkStyles} to="/" exact>
        Home
      </NavLink>

      {isAuthenticated && !isHomeOrLogin && !isSignup && (
        <>
          {location.pathname !== "/" && location.pathname !== "/Login" && (
            <NavLink style={navLinkStyles} to="/CustomerDashboard">
              Customer View
            </NavLink>
          )}
          {location.pathname !== "/AgentDashboard" && (
            <NavLink style={navLinkStyles} to="/AgentDashboard">
              Agent View
            </NavLink>
          )}
          {location.pathname !== "/AdminDashboard" && (
            <NavLink style={navLinkStyles} to="/AdminDashboard">
              Administrator View
            </NavLink>
          )}
        </>
      )}

      {isHomeOrLogin && location.pathname !== "/Login" && !isSignup && (
        <NavLink style={navLinkStyles} to="/Login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
