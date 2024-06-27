// Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("Server is running in port 3002");
});

// Database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db_login",
});

// Router
app.post("/register", (req, res) => {
  const sentEmail = req.body.Email;
  const sentUsername = req.body.Username;
  const sentPassword = req.body.Password;
  const sentRole = req.body.Role;

  const SQL = "INSERT INTO users (email, username, password, role) VALUES (?,?,?,?)";

  const Values = [sentEmail, sentUsername, sentPassword, sentRole];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User berhasil dibuat");
      res.send({ message: "User ditambahkan" });
    }
  });
});

app.post("/login", (req, res) => {
  const sentLoginUsername = req.body.LoginUsername;
  const sentLoginPassword = req.body.LoginPassword;

  const SQL = "SELECT * FROM users WHERE username = ? && password = ?";

  const Values = [sentLoginUsername, sentLoginPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      // Asumsikan hasilnya adalah array dan kita hanya mengambil elemen pertama
      const users = results[0];
      res.send({
        username: users.username,
        role: users.role, // Pastikan kolom role ada dalam tabel users
      });
    } else {
      res.send({ message: "Credentials dont match" });
    }
  });
});
