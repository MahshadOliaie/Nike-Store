import { useContext } from 'react';
import HeartSvg from '../SVGs/HeartSvg/HeartSvg'
import CSS from './product.module.css'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem';
import { useNavigate } from 'react-router-dom';

function Product({ data }) {
    const { favoriteItems, setFavoriteItems } = useContext(FavoriteItems)
    const navigate = useNavigate()

    const isFavorite = favoriteItems.find((item) => item.id === data.id);

    function handleClick() {  

        if (!isFavorite) {
            setFavoriteItems([...favoriteItems, data])
        }
        else {
            setFavoriteItems(favoriteItems.filter(item => {
                return item.id !== data.id
            }))
        }
              
    }

    return (
        <>
            <div className={CSS.product} onClick={() => navigate(`/product/${data.id}`)}>
                <div className={CSS.image}><img src={data.image} alt="" /></div>
                <div className={CSS.about}>
                    <h3 className={CSS.title}>{data.title}</h3>
                    <p className={CSS.desc}>category: {data.category}</p>
                    <div className={CSS.lastLine}>
                        <p className={CSS.price}>{data.price}$</p>
                        <HeartSvg onClick={handleClick} fill={isFavorite ? "red" : "rgba(0, 0, 0, 0.306)"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product