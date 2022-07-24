import styled from "@emotion/styled";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Reviews/>
            <Footer />
        </div>
    )
}

export default Home;