
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
  const [wishList,setWishList] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  // const [wish, setWish] = useState([]);

  // console.log(cartItem,"cart in app js")

  console.log(wishList ,"search value")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch} cartItem={cartItem} />} wishList={wishList} />
        <Route path="/mockman" element={<MyMockman  cartItem={cartItem}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/products/:id" element={<Products setCartCount={setCartCount} search={search} cartItem={cartItem} setCartItem = {setCartItem} setSearch={setSearch}/>} wishList={wishList} />
        <Route path="/productCard" element={<ProductCard setCartCount={setCartCount} cartItem={cartItem} setCartItem = {setCartItem} wishList={wishList} setWishList={setWishList}  />} />
        <Route path="/cart" element={<MyCart cartCount={cartCount} setCartCount={setCartCount} setCartItem = {setCartItem} wishList={wishList}cartItem={cartItem} setWishList={setWishList} />} />
        <Route path="/wishlist" element={<MyWishlist wishList={wishList} setWishList={setWishList} cartItem={cartItem}   />} />
      </Routes>
    </div>
  );
}

export default App;
