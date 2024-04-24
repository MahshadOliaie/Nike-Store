import { useNavigate } from 'react-router-dom'
import CSS from './index.module.css'


function Card({ item }) {
    const navigate = useNavigate()
    return (
        <>
            <div className={CSS.card} onClick={() => navigate(`/product/${item.id}`)}>
                <div className={CSS.cardImage}>
                    <img src={item.grid_picture_url} alt="" />
                </div>

                <div className={CSS.cardAbout}>
                    <h4 className={CSS.title}>{item.name}</h4>
                    <p className={CSS.price}>${(item.retail_price_cents) / 100}</p>
                </div>
            </div>
        </>
    )
}

export default Card