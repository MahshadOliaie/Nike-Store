import { useEffect, useState } from 'react'
import CSS from './index.module.css'

function Slider() {
    const [bg, setBg] = useState(1)

    useEffect(() => {
        let slider = setTimeout(() => {
            if (bg == 5) {
                setBg(1)
            }
            else
                setBg((prev) => (prev + 1))
        }, 3500)
        return () => { clearTimeout(slider) }
    }, [bg])

    return (
        <>
            <section className={CSS.slider} style={{ backgroundImage: `url('/0${bg}.JPG')` }}></section>
        </>
    )
}

export default Slider