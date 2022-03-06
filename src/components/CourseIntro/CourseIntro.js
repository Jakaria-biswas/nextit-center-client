import React from 'react';
import './CourseIntro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDesktop, faTasks, faCertificate } from '@fortawesome/free-solid-svg-icons';
const Course = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className=' col-md-4 text-center  '>
                        <div className='motivate-logo-bg' >
                            <span className='course-logo'><FontAwesomeIcon icon={faDesktop} /></span>
                            <p className='course-title'>Take computer science courses with personalized support</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='motivate-logo-bg'>
                            <span className='course-logo'><FontAwesomeIcon icon={faTasks} /></span>
                            <p className='course-title'>Build cool projects to showcase your skills</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='motivate-logo-bg'>
                            <span className='course-logo'><FontAwesomeIcon icon={faCertificate} /></span>
                            <p className='course-title'>Earn certificates recognized by Industry</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Course;