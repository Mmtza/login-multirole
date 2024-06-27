import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSelectChange = (e) => {
    setRole(e.target.value);
  };

  const navigateTo = useNavigate();

  const createUser = () => {
    Axios.post("http://localhost:3002/register", {
      Email: email,
      Username: username,
      Password: password,
      Role: role,
    }).then(() => {
      console.log("User berhasil dibuat");
      navigateTo("/");
    });
  };

  return (
    <div>
      <form action="">
        <h1>Register</h1>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" placeholder="masukkan email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="username" placeholder="masukkan username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" placeholder="masukkan password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="role">Role</label>
          <br />
          <select id="role" value={role} onChange={handleSelectChange}>
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
            <option value="employe">Employe</option>
          </select>
        </div>
        <br />
        <button type="submit" onClick={createUser}>
          Register
        </button>
      </form>
      <br />
      <a href="/">Login</a>
    </div>
  );
};

export default Register;
