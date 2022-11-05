import './AboutUs.css';
import student from '../assets/entrepreneur.jpg';
import analytics from '../assets/stock-gcb696f657_1920.jpg';
import { Link } from "react-router-dom";
function AboutUs() {
    return (
        <div className='about'>


                <div className='left'>
                    <h1>Who should Attend?</h1>
                    <p>Individual investors and portfolio managers will benefit from learning
                        the value investing methodology, uncovering opportunities that others miss.
                        But beyond that, the analytical approach teaches critical thinking about growth and
                        profitability, which is valuable for all corporate decision makers.</p>
                    <Link to='/contact'><button className='btn'>Contact</button></Link>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <div className='image-stack top'>
                            <img src={student} className='img' alt='' />
                        </div>
                        <div className='image-stack bottom'>
                            <img src={analytics} className='img' alt='' />
                        </div>
                    </div>
                </div>


                <p></p>



        </div>
    );
}

export default AboutUs;