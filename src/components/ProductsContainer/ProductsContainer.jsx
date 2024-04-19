import { useContext } from 'react'
import Product from '../Product/Product'
import CSS from './productsContainer.module.css'
import Products from '../../context/products/Products'

function ProductsContainer() {
    const {filteredProducts} = useContext(Products)

    return (
        <>
            <div className={CSS.productsContainer}>
                {
                    filteredProducts.map((item) => {
                        return <Product key={item.id} data={item} />
                    })
                }
            </div>
        </>
    )
}

export default ProductsContainer