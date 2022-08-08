import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import AddBucks from "./pages/AddBucks";
import AddTopping from "./pages/AddTopping";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";
import AddCart from "./pages/AddCart";
import { UserContext } from "./context/UserContext";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  useEffect(() => {
    if (state.isLogin === false) {
      return navigate("/");
    }
    if (state.user.email === "admin@mail.com") {
      alert("Login Berhasil!");
      navigate("/transaction");
    } else if (state.user.email === "laksa@mail.com") {
      alert("Login Berhasil!");
      navigate("/homepage");
    } else if (state.user.email === "husni@mail.com") {
      alert("Login Berhasil!");
      navigate("/homepage");
    } else if (state.isLogin === false) {
      alert("...");
    }
  }, [state]);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/add-bucks" element={<AddBucks />} />
      <Route path="/add-topping" element={<AddTopping />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/add-cart/:id" element={<AddCart />} />
    </Routes>
  );
}

export default App;
