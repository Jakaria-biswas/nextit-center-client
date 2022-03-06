import React, { useEffect, useState } from 'react';
import './MainCourse.css';
// import office from  '../../images/Office-applications.png';
// import graphice from '../../images/graphice-design.png';
// import hardware from '../../images/hardware.jpg';
// import web from '../../images/web-design.png'

import Course from '../Course/Course';
const MainCourse = () => {
          const [courseInfo, setCourseInfo] =  useState([])
          useEffect(()=> {
                 fetch('https://nextit-center.herokuapp.com/getAllData')
                 .then(res => res.json())
                 .then(data=> setCourseInfo(data))
          },[])
    

  
    return (
        <div className='container' >
            <h2 className='text-center pt-5 header-title'>Courses Starting Soon</h2>
            <span className='course-header-border'></span>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    courseInfo.map(courseInfo => <Course courseInfo={courseInfo}></Course>)

                }

            </div>
       
        </div>
    );
};

export default MainCourse;