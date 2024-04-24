import { useContext, useState } from 'react';
import CSS from './header.module.css'
import LoginState from '../../context/LoginState/LoginState';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginState)
    const [menuOppened, setMenuOppened] = useState(false)
    const nav = useNavigate()

    return (
        <>
            <div className={CSS.header}>
                <div className={CSS.bar} onClick={() => setMenuOppened(prev => !prev)}>
                    <img src="./bar.svg" alt="" />
                </div>
                {(isLoggedIn) ?
                    <div className={CSS.userPhoto}><img src="./user.jpg" alt="" /></div>
                    :
                    <p className={CSS.loginBtn}>LOGIN</p>
                }
            </div>
            {(menuOppened) &&
                <div className={CSS.menu}>
                    <img src="/logo.jpg" alt="logo" onClick={() => nav('/')} />
                    <p onClick={() => nav('/products')}>PRODUCTS</p>
                    <p onClick={() => nav('/favorite')}>FAVORITES</p>
                    <p onClick={() => nav('/cart')}>MY BAG</p>
                    {(isLoggedIn) ?
                        <p className={CSS.login} onClick={() => { setIsLoggedIn(false); setMenuOppened(false) }}>LOG OUT</p>
                        :
                        <p className={CSS.login} onClick={() => nav('/login')}>LOGIN</p>
                    }
                </div>
            }
        </>
    )
}

export default Header;