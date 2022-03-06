import React from 'react';
import './Footer.css';
import logo from '../../images/next-it-logo.png';
const Footer = () => {
    return (
        <div className='footer-outer mt-5'>
            <div className="container ">
                <div className='text-center'>
                    <div className='py-5'>
                        <img  className='img-fluid my-5' src={logo} alt="" />
                        <p    className='text-white'>Phone: 01711-158342</p>
                        <p    className='text-white'>Email: nextit99@gmail.com</p>
                        <p    className='text-white'>Sadar Hospital Road, Nabinbagh Next IT Center Bangladesh, 8100 Gopalganj</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;