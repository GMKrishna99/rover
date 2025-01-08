import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ProductDetails from "./components/Products/ProductDetails";
import AddToCartPage from "./components/addtocart"; // Import the AddToCartPage component
import CheckoutPage from "./components/Order/checkoutpage";
import ProductList from "./components/Products/productlist";
import Login from "./components/Login";
import OrderHistory from "./Component/OrderHistory";
import Register from "./Component/Register";
import NavbarCategory from "./components/Navbar/navbarcategories";
import Profile from "./components/Order/profile";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    let cart = [...cartItems, product];
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleRemoveFromCart = (index) => {
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleMoveToWishlist = (index) => {
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Moved to wishlist");
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Router>
        <ScrollToTop />
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home onAddToCart={handleAddToCart} />}
          />
          <Route
            exact
            path="/home"
            element={<Home onAddToCart={handleAddToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/product/:productId"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <AddToCartPage
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemove={handleRemoveFromCart}
                onMoveToWishlist={handleMoveToWishlist}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/buynow" element={<CheckoutPage />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/profile/orderHistory" element={<OrderHistory />} />
          <Route
            path="/category/:gender/:type/:subtype"
            element={<NavbarCategory />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
