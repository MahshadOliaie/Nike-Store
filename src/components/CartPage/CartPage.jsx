import { useContext } from 'react';
import Layout from '../Laout/Layout';
import CSS from './index.module.css'
import Cart from '../../context/Cart/Cart';
import Product from '../Product/Product';

function CartPage(){

    const {carts} = useContext(Cart)

    return(
        <>
         <Layout>
                <h1 className={CSS.heading}>My Bag</h1>
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