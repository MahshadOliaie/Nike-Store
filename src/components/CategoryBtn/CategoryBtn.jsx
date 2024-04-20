import { useContext } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Products from '../../context/products/Products';
import CSS from './categoryBtn.module.css'

function CategoryBtn({ category, currentCat, setCurrentCat }) {
    let data;
    if (category == "All") {
        data = useFetch('/data/db.json')
    }

    else {
        data = useFetch(`/data/categories/${category}.json`)
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