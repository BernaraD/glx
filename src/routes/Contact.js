import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contact() {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Contact us'/>
            <Form />
            <Footer/>
        </div>
    );
}

export default Contact;