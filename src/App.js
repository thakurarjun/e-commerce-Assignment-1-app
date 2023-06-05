
import "./App.css";
import logo from "./logo.png";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Products from "./pages/products";
import ProductCard from "./pages/productCard";
import MyCart from "./pages/myCart";
import MyWishlist from "./pages/myWishlist";
import MyMockman from "./pages/mockman";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";


function App() {
  const [search,setSearch] = useState("hello g")
  const [cartCount,setCartCount] = useState(0);
  const [wishlist,setWishlist] = useState(0);
  console.log(search,"search value")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
        <Route path="/mockman" element={<MyMockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/products/:id" element={<Products setCartCount={setCartCount} search={search} setSearch={setSearch}/>} />
        <Route path="/productCard" element={<ProductCard setCartCount={setCartCount} setWishlist={setWishlist} />} />
        <Route path="/cart" element={<MyCart cartCount={cartCount}  />} />
        <Route path="/wishlist" element={<MyWishlist wishlist={wishlist} setWishlist={setWishlist} />} />
      </Routes>
    </div>
  );
}

export default App;
