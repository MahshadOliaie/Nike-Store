import Footer from "../Footer/Footer"
import Layout from "../Laout/Layout"
import LatestProducts from "../LatestProducts/LatestProducts"
import Running from "../Running/Running"
import Slider from "../Slider/Slider"

function HomePage() {
    return (
        <Layout>
            <Slider />
            <LatestProducts />
            <Running />
            <Footer />
        </Layout>
    )
}

export default HomePage



