import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch(`https://nextit-center.herokuapp.com/getSingleCourse/${courseId}`)
      .then(res => res.json())
      .then(data => setCourseDetails(data))

  }, [])

  return (

    <div>
     <Header></Header>
      <div className='container mt-5'>
        <div className="row">
          <div className="course-detail-page">
            <div>
              <h2 className='  p-2 text-center'>The {courseDetails.title} course detail</h2>
              <img className='img-fluid in_side_img' src={courseDetails.inSideImage} alt="" />
              <p className='py-2 '>Course Fee: {courseDetails.fee} taka</p>
              <h4 className=''>What we Learn</h4>
              
              
              <p className='' style={{whiteSpace:"pre-line"}} >{courseDetails.description}</p>
            </div>
          </div>
         
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetail;