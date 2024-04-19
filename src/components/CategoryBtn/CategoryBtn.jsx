import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Products from '../../context/products/Products';
import CSS from './categoryBtn.module.css'

function CategoryBtn({ category, currentCat, setCurrentCat }) {
    let data;
    if (category == "All") {
        data = useFetch('https://fakestoreapi.com/products')
    }

    else {
        data = useFetch(`https://fakestoreapi.com/products/category/${category}`)
    }
    const { setFilteredProducts } = useContext(Products)

    function filter() {
        setFilteredProducts(data)
        setCurrentCat(category)
    }

    return (
        <p className={(currentCat == category) ? `${CSS.activeBtn} ${CSS.filterBtn}` : `${CSS.filterBtn}`} onClick={filter}>{category}</p>
    )
}

export default CategoryBtn;