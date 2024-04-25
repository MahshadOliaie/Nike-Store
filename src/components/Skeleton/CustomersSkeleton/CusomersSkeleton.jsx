

import CSS from './index.module.css'

function CustomersSkeleton() {
    return (
        <div className={CSS.card}>
            <div className={CSS.image}></div>
            <div className={CSS.about}>
                <div className={CSS.name}></div>
                <div className={CSS.city}></div>
                <div className={CSS.phone}></div>
            </div>
        </div>
    )
}

export default CustomersSkeleton;