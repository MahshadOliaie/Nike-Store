import { useEffect, useState } from 'react'
import FilterBar from '../FilterBar/FilterBar'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import SearchBar from '../SearchBar/SearchBar'
import CSS from './index.module.css'
import Products from '../../context/products/Products'
import useFetch from '../../hooks/useFetch/useFetch'
import Layout from '../Laout/Layout'



function ProductsPage(){
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const data = useFetch('/data/db.json')

    
    useEffect(() => {
        setProducts(data)
        setFilteredProducts(data)
    }, [data])

    return (
        <>

            <Products.Provider value={{
                products,
                filteredProducts,
                setFilteredProducts
            }}>
                <Layout>
                    <div className={CSS.heading}>
                        <p className={CSS.welcome}>Just Do It</p>
                        <h1 className={CSS.title}>New Arrivals From Jordan</h1>
                    </div>

                    <SearchBar />
                    <FilterBar />
                    <ProductsContainer />
                </Layout>
            </Products.Provider>
        </>
    )
}

export default ProductsPage