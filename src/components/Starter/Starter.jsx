
import CSS from './starter.module.css'

function Starter({onClick}) {
    return (
        <>
            <div className={CSS.container}>
                <p className={CSS.startBtn} onClick={onClick}>Get Started</p>
            </div>
        </>
    )
}

export default Starter