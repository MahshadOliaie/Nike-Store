import CSS from './index.module.css'

function CustomerDetail({ user, setOpenUser }) {
    const { email, location, dob, phone, picture, name } = user
    let address = `${location.street.number} ${location.street.name} St`
    let d = new Date(dob.date)
    let birthday = d.toLocaleDateString()

    return (
        <>
            <div className={CSS.moreInfo}>
                <svg className={CSS.closeBtn} onClick={() => setOpenUser(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

                <div className={CSS.mainInfo}>
                    <div className={CSS.image}>
                        <img src={picture.large} alt="" />
                    </div>
                    <div className={CSS.name}>
                        <h3 className={CSS.nameTilte}>{`${name.first} ${name.last}`}</h3>
                    </div>
                </div>

                <div className={CSS.phoneNumber}>
                    <p className={CSS.title}>Mobile</p>
                    <p className={CSS.titleInfo}>{phone}</p>
                </div>
                <div className={CSS.email}>
                    <p className={CSS.title}>Email</p>
                    <p className={CSS.titleInfo}>{email}</p>
                </div>
                <div className={CSS.address}>
                    <p className={CSS.title}>Address</p>
                    <p className={CSS.titleInfo}>{address}</p>
                </div>
                <div className={CSS.birthday}>
                    <p className={CSS.title}>Birthday</p>
                    <p className={CSS.titleInfo}>{birthday}</p>
                </div>
            </div>
        </>
    )
}

export default CustomerDetail