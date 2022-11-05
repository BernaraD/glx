import './Pricing.css';
import { Link } from "react-router-dom";

function PricingCards() {


    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>Basic</h3>
                    <span className='bar'></span>
                    <p>9 weeks online</p>
                    <p>6-8 hours per week</p>
                    <p>Access to the group chat</p>
                    <p>1 one on one session with the course lead</p>
                    <p className='btc'>3,500</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>

                <div className='card'>
                    <h3>Premium</h3>
                    <span className='bar'></span>
                    <p>9 weeks online</p>
                    <p>6-8 hours per week</p>
                    <p>Access to the group chat</p>
                    <p>3 one on one session with the course lead</p>
                    <p>Extra learning materials</p>
                    <p className='btc'>6,500</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>

                <div className='card'>
                    <h3>V.I.P</h3>
                    <span className='bar'></span>
                    <p>9 weeks online</p>
                    <p>6-8 hours per week</p>
                    <p>Access to the group chat</p>
                    <p>1 one on one session with the course lead</p>
                    <p>6 month internship in leading companies</p>
                    <p>Discount for other courses 20%</p>
                    <p className='btc'>10,000</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    );
}

export default PricingCards;