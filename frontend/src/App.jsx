import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useContext(AuthContext);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50); // tiny delay for transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-[url('./src/assets/bgImage.jpg')] bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
