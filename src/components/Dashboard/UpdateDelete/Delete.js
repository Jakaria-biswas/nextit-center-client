import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Delete = ({courseItem}) => {

       const handleDelete = (id) => {
           fetch(`https://nextit-center.herokuapp.com/deleteCourse/${id}`,  {
                 method:"DELETE"
           })
           .then(res => res.json())
           .then(result => {
                 if(result){
                    // toast.warn("Course delete successfully!" , {position:"top-center"});
                   alert( "Are you sure delete this course",window.location.reload())
                 }
           })
       }

    
    return (
        <div>
               <div class="col">
                <div class="card">
                    <img src={courseItem.mainFontImage} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{courseItem.title}</h5>
                        <p class="card-text">{courseItem.create}</p>
                    </div>
                    <div className='card-body d-flex justify-content-between '>
                      
                         <Link to={`/courseId/${courseItem._id}`}><button className='btn btn-outline-info btn-sm'>view course</button></Link>
                          <button className='btn btn-danger' onClick={() => handleDelete(`${courseItem._id}`)}>delete</button>
                          
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Delete;