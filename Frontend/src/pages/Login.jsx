import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", form);
     // 1. Save Token
      localStorage.setItem("token", res.data.token);
      
      // 2. Save User Info (Needed for profile/navbar names)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      // 3. Navigate to the root (Home/Dashboard)
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p onClick={() => navigate("/register")} className="auth-switch">
          Create account?
        </p>
      </form>
    </div>
  );
};

export default Login;
