import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Course = ({ courseInfo }) => {

    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={courseInfo.mainFontImage} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{courseInfo.title}</h5>
                        <p class="card-text">{courseInfo.create}</p>
                    </div>
                    <div className='card-body d-flex justify-content-between '>
                        <span><FontAwesomeIcon icon={faClock} /> duration: {courseInfo.duration}</span>
                         <Link to={`/courseId/${courseInfo._id}`}><button className='btn btn-outline-info btn-sm'>view course</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;