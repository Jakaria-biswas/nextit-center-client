import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faMapMarkerAlt, faMobile, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
const Contact = () => {


    const handleContact = (event) => {
        event.preventDefault()

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const contact = { name: name, email: email, message: message, postTime: moment().format("DD/MM/YYYY") }



        fetch('https://nextit-center.herokuapp.com/addContactInfo', {
            method: "post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast.success("We will contact with you!" , {position:"top-center"});
                     document.getElementById('name').value="";
                     document.getElementById('email').value="";
                     document.getElementById('message').value="";
                }
            })

    }
    return (
        <div>
            <div className="container">
                <h2 className='contact pt-5'>Contact Us</h2>
                <span className='contact-header-border'></span>
                <div className="row">
                    <div className="col-md-6  contact-from ">
                        <div>
                            <form onSubmit={handleContact} >
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="3" name="message" required></textarea>
                                </div>
                                {/* <button className='btn btn-primary btn-sm' >Send Message</button> */}
                                <input type="submit" value="Send Message" />
                            </form>

                        </div>
                        <ToastContainer />
                    </div>
                    <div className="col-md-6  align-self-center">
                        <div className='contact-source '>
                            <p> <span><FontAwesomeIcon icon={faMobile} /></span> Phone: 01711-158342</p>
                            <p> <span><FontAwesomeIcon icon={faEnvelope} /></span> Email: nextit99@gmail.com</p>
                            <p> <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Sadar Hospital Road, Nabinbagh Next IT Center Bangladesh, 8100 Gopalganj</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;