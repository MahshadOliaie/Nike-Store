import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch/useFetch"
import CSS from './index.module.css'
import DetailSkeleton from "../Skeleton/DetailPageSkeleton/DetailSkeleton"
import { useRef } from "react"


function ProductDetail() {
    const { id } = useParams()
    const products = useFetch('/data/api.json')
    const product = products.find(item => item.id == id)

    return (
        <>
            {(product) ?
                <div className={CSS.detail}>
                    <div className={CSS.image}>
                        <img src={product.original_picture_url} alt="" />
                    </div>
                    <div className={CSS.about}>
                        <h2>{product.name}</h2>
                        <p className={CSS.category}><span>Category: </span>{product.category}</p>
                        <p>{product.story_html}</p>
                        <p className={CSS.price}>{(product.retail_price_cents) / 100}$</p>
                    </div>
                    <div className={CSS.add}>
                        <p className={CSS.addBtn}>ADD TO BAG</p>
                    </div>
                </div>
                :
                <DetailSkeleton />
            }

        </>
    )
}

export default ProductDetail