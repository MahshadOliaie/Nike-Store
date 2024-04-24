import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch/useFetch'
import Card from './Card'
import CSS from './index.module.css'

function LatestProducts() {
    const data = useFetch('/data/db.json').slice(0, 4)
    const navigate = useNavigate()

    return (
        <>
            <section className={CSS.latestContainer}>
                <div className={CSS.headingTitle}>
                    <h2>LATEST PRODUCTS</h2>
                    <p onClick={()=> navigate("/products")}>More</p>
                </div>
                <div className={CSS.cards}>
                    {data.map(item => {
                        return <Card item={item} key={item.id} />
                    })}
                </div>
            </section>
        </>
    )
}

export default LatestProducts