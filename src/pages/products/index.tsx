import { useState } from 'react'
import '../../assets/css/ProductIndex.css'
import ProductCard from '../../components/ProductCard'

function ProductIndex() {

    return (
        <div className='container'>
            <div className='row'>
                <ProductCard title="Product 1" price="$90,00"/>
                <ProductCard title="Product 2" price="$190,00"/>
                <ProductCard title="Product 3" price="$290,00"/>
            </div>
        </div>
    )
}

export default ProductIndex
