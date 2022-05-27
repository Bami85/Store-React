import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Checkout from './pages/Checkout'
import ProductList from './pages/products/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <div>
    <Header />
    <ProductList />
    <Footer />
 </div>
)
