import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='About us'
                       text="Find the opportunities that other investors miss because they’re too focused on the glamour stocks"/>
            <AboutUs />
            <Footer/>
        </div>
    );
}

export default About;