import { useContext } from 'react';
import Layout from '../Laout/Layout';
import CSS from './index.module.css'
import Cart from '../../context/Cart/Cart';
import Product from '../Product/Product';

function CartPage() {

    const { carts } = useContext(Cart)
    const pricesArray = carts.map(item => item.retail_price_cents)

    return (
        <>
            <Layout>
                <div className={CSS.header}>
                    <h1 className={CSS.heading}>My Bag</h1>
                    <div className={CSS.totalPrice}>
                        <h4>Total:</h4>
                        <p className={CSS.pticeNum}>{(pricesArray.reduce((acc, curr) => acc + curr, 0)) / 100}$</p>
                    </div>

                </div>

                <div className={CSS.cartContainer}>
                    {(carts.length > 0) ?
                        carts.map(item => {
                            return <Product key={item.id} data={item} />
                        }) :
                        <p>your bag is empty</p>
                    }
                </div>
            </Layout>

        </>
    )
}

export default CartPage;