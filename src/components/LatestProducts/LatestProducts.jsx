import useFetch from '../../hooks/useFetch/useFetch'
import Card from './Card'
import CSS from './index.module.css'

function LatestProducts(){
    const data = useFetch('/data/db.json').slice(0 , 4)

    return(
        <>
        <section className={CSS.latestContainer}>
            <h2>LATEST PRODUCTS</h2>
            <div className={CSS.cards}>
                {data.map(item =>{
                    return <Card item={item} key={item.id}/>
                })}
            </div>
        </section>
        </>
    )
}

export default LatestProducts