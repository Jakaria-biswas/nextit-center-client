import React, { useEffect, useState } from 'react';
import Delete from './Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateDelete = () => {
    const [courseInfo, setCourseInfo] = useState([])
    useEffect(() => {
        fetch('https://nextit-center.herokuapp.com/getAllData')
            .then(res => res.json())
            .then(data => setCourseInfo(data))
    }, [])
    return (
        <div className='container'>
            <h2>Update and delete course </h2>
            <h3>Course {courseInfo.length}</h3>
            
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                      courseInfo.map(courseItem => <Delete courseItem={courseItem}></Delete>)

                }
               

            </div>
         
        </div>
    );
};

export default UpdateDelete;