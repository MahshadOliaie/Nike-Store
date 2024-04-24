import Layout from "../Laout/Layout"
import LatestProducts from "../LatestProducts/LatestProducts"
import Slider from "../Slider/Slider"

function HomePage() {
    return (
        <Layout>
            <Slider />
            <LatestProducts />
        </Layout>
    )
}

export default HomePage



