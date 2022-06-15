import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import CartList from './pages/CartList'
import ProductList from './pages/products/index'
import ProductShow from './pages/products/show'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/show/" element={<ProductShow />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App
