import { Route, Routes } from "react-router";
import "./App.css";
import logo from "./logo.png";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Products from "./pages/products";
import ProductCard from "./pages/productCard";
import MyCart from "./pages/myCart";
import MyWishlist from "./pages/myWishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/wishlist" element={<MyWishlist />} />
      </Routes>
    </div>
  );
}

export default App;
