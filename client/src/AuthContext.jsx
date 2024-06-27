import React, { createContext, useContext, useState } from "react";

// Membuat konteks
const AuthContext = createContext();

// Hook untuk menggunakan konteks
export const useAuth = () => {
  return useContext(AuthContext);
};

// Komponen penyedia konteks
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(""); // Menyimpan peran pengguna

  const login = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole); // Menyimpan peran dari parameter
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(""); // Menghapus peran saat logout
  };

  return <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>{children}</AuthContext.Provider>;
};
