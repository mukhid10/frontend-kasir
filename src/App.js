import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
