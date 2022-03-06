import React from 'react';
import slideBg from '../../images/bg.jpg';
const Slider = () => {
    return (
        <div>
            <div className='container' >
                <img className='d-block w-100 img-fluid my-1' src={slideBg} alt="main-bg-image" />
            </div>
        </div>
    );
};

export default Slider;