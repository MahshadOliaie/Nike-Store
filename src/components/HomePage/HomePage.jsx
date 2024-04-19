import { useEffect, useState } from 'react'
import FilterBar from '../FilterBar/FilterBar'
import Header from '../Header/Header'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import SearchBar from '../SearchBar/SearchBar'
import ToolBar from '../ToolBar/ToolBar'
import CSS from './homePage.module.css'
import Products from '../../context/products/Products'
import useFetch from '../../hooks/useFetch/useFetch'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem'
import Layout from '../Laout/Layout'


function HomePage() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const data = useFetch('/data/db.json')

    const d = useFetch('/data/api.json')
let res = d.map(item =>{
    return item.category
})

console.log(res)

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
                        <p className={CSS.welcome}>Welcome, Flightio</p>
                        <h1 className={CSS.title}>Bring Designer Lamps This Diwali</h1>
                    </div>

                    <SearchBar />
                    <FilterBar />
                    <ProductsContainer />
                </Layout>
            </Products.Provider>
        </>
    )
}

export default HomePage


