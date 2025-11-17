import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h3 className="logo" onClick={() => navigate("/dashboard")}>
        Snippet Manager
      </h3>

      <div className="nav-right">
        <button onClick={() => navigate("/add")}>Add New</button>
        <button onClick={logout} className="danger">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
