import { useContext, useRef, useState } from 'react';
import HeartSvg from '../SVGs/HeartSvg/HeartSvg';
import CSS from './toolBar.module.css'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem';
import { useNavigate } from 'react-router-dom';
import HomeSvg from '../SVGs/HomeSvg/HomeSvg';
import CartSvg from '../SVGs/CartSvg/CartSvg';
import ShoeSvg from '../SVGs/ShoeSvg/ShoeSvg';

function ToolBar() {
    const navigate = useNavigate()
    const { favoriteItems } = useContext(FavoriteItems)

    return (
        <div className={CSS.toolBar}>
            <HomeSvg />
            <ShoeSvg />
            <CartSvg />
            <HeartSvg hasLabel={true} label={favoriteItems.length} onClick={() => { navigate(`/favorite`) }} />
        </div>
    )
}

export default ToolBar;
