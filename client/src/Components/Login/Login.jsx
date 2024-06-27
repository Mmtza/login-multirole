import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [role, setRole] = useState("");

  const navigateTo = useNavigate();
  const { login } = useAuth();

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      LoginUsername: loginUsername,
      LoginPassword: loginPassword,
    }).then((response) => {
      console.log(response);
      if (response.data.message || loginUsername == "" || loginPassword == "") {
        navigateTo("/");
      } else {
        if (response.data) {
          login(response.data.role); // Simpan role dari respons
          if (response.data.role === "owner") {
            navigateTo("/owner-dashboard");
          } else if (response.data.role === "admin") {
            navigateTo("/admin-dashboard");
          } else if (response.data.role === "employe") {
            navigateTo("/employe-dashboard");
          }
          // Tambahkan pemeriksaan role lainnya sesuai kebutuhan
        }
      }
    });
  };
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="username" placeholder="masukkan username" onChange={(e) => setLoginUsername(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" placeholder="masukkan password" onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <br />
        <button type="submit" onClick={loginUser}>
          Login
        </button>
      </form>
      <br />
      <a href="/register">Register</a>
    </div>
  );
};

export default Login;
