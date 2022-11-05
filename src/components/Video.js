import './Video.css';
import { Link } from "react-router-dom";

import spaceVideo from '../assets/Stock - 125544.mp4';
function Video() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>GLX Trading</h1>
                <p>Learn Trading and change your life</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    );
}

export default Video;