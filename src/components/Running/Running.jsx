import { useNavigate } from 'react-router-dom'
import CSS from './index.module.css'

function Running() {

    const nav = useNavigate()

    function handleClick(){
        nav('/products')
    }

    return (
        <>
            <section className={CSS.runningSlide}>
                <div className={CSS.runningText}>
                    <p>New from Nike Running</p>
                    <h2>Journey Run</h2>
                    <p className={CSS.btn} onClick={handleClick}>Shop</p>
                </div>
                <div className={CSS.layout}></div>
            </section>
        </>
    )
}

export default Running