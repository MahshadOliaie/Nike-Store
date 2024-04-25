
import CSS from './index.module.css'
import CustomerDetail from '../CustomerDetail/CustomerDetail'
import { useState } from 'react'


function Customer({ user }) {
    const { name, location, phone, picture } = user
    const userName = `${name.first} ${name.last}`
    const [openUser, setOpenUser] = useState(false)

    return (
        <>
            <div className={CSS.card} onClick={() => setOpenUser(true)}>
                <div className={CSS.image}>
                    <img src={picture.large} alt="" />
                </div>
                <div className={CSS.about}>
                    <h3 className={CSS.name}>{userName}</h3>
                    <p className={CSS.city}>{location.city}</p>
                    <p className={CSS.phone}>{phone}</p>
                </div>
            </div>

            {(openUser) && <CustomerDetail user={user} setOpenUser={setOpenUser} />}

        </>
    )
}

export default Customer