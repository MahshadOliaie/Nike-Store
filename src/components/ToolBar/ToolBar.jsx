import { useContext, useRef, useState } from 'react';
import HeartSvg from '../SVGs/HeartSvg/HeartSvg';
import CSS from './toolBar.module.css'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem';
import { useNavigate } from 'react-router-dom';
import HomeSvg from '../SVGs/HomeSvg/HomeSvg';
import CartSvg from '../SVGs/CartSvg/CartSvg';

function ToolBar() {
    const navigate = useNavigate()
    const { favoriteItems } = useContext(FavoriteItems)

    return (
        <div className={CSS.toolBar}>
            <HomeSvg />
            <CartSvg />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg>
            <HeartSvg hasLabel={true} label={favoriteItems.length} onClick={() => { navigate(`/favorite`) }} />
        </div>
    )
}

export default ToolBar;
