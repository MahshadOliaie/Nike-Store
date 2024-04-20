import { useContext } from 'react';
import HeartSvg from '../SVGs/HeartSvg/HeartSvg'
import CSS from './product.module.css'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem';
import { useNavigate } from 'react-router-dom';
import Cart from '../../context/Cart/Cart';

function Product({ data, hasHeart, handleRemove }) {
    const { favoriteItems, setFavoriteItems } = useContext(FavoriteItems)
    const navigate = useNavigate()
    const { setCarts } = useContext(Cart)

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

    function handleRemove(event) {
        setCarts(prev => prev.filter(item => item.id !== data.id))
        event.stopPropagation()
    }

    return (
        <>
            <div className={CSS.product} onClick={() => navigate(`/product/${data.id}`)}>
                <div className={CSS.image}><img src={data.grid_picture_url} alt="" /></div>
                <div className={CSS.about}>
                    <h3 className={CSS.title}>{data.name}</h3>
                    <p className={CSS.desc}>category: {data.category}</p>
                    <div className={CSS.lastLine}>
                        {(!hasHeart) && <p className={CSS.removeBtn} onClick={handleRemove}>Remove</p>}
                        <p className={CSS.price}>{(data.retail_price_cents) / 100}$</p>
                        {(hasHeart) && <HeartSvg onClick={handleClick} fill={isFavorite ? "red" : "rgba(0, 0, 0, 0.306)"} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product