
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
  const [wishlist,setWishlist] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  // const [wish, setWish] = useState([]);

  // console.log(cartItem,"cart in app js")

  console.log(wishlist={wishlist} ,"search value")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch} cartItem={cartItem} />} wishlist={wishlist} />
        <Route path="/mockman" element={<MyMockman  cartItem={cartItem}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/products/:id" element={<Products setCartCount={setCartCount} search={search} cartItem={cartItem} setCartItem = {setCartItem} setSearch={setSearch}/>} wishlist={wishlist} />
        <Route path="/productCard" element={<ProductCard setCartCount={setCartCount} cartItem={cartItem} setCartItem = {setCartItem} wishList={wishlist} setWishlist={setWishlist} wishlist={wishlist} />} />
        <Route path="/cart" element={<MyCart cartCount={cartCount} setCartCount={setCartCount} setCartItem = {setCartItem} wishlist={wishlist}cartItem={cartItem} setWishlist={setWishlist} />} />
        <Route path="/wishlist" element={<MyWishlist wishlist={wishlist} setWishlist={setWishlist} cartItem={cartItem}   />} />
      </Routes>
    </div>
  );
}

export default App;
