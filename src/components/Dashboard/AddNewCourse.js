import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNewCourse = () => {


    const [fontImageURL, setFontImageURL] = useState(null);
    const [inSideImageURL, setInSideImageURL] = useState(null);



    const handleFontImg = (event) => {
        console.log(event.target.files[0]);
        const fontImg = new FormData();
//         fontImg.set('key', '6fe26f29cfa4919a2bd6c02e3547da20') contact jakaria with email
        fontImg.set('key', 'aa3d6d80d719eb49afe75ab885c9b305')
        fontImg.append('image', event.target.files[0])
        // Send a POST request
        axios.post('https://api.imgbb.com/1/upload',
            fontImg
        )
            .then(function (response) {
                setFontImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const handleInsideImage = (event) => {
        const inSideImage = new FormData();
//         inSideImage.set("key", '6fe26f29cfa4919a2bd6c02e3547da20')
        fontImg.set('key', 'aa3d6d80d719eb49afe75ab885c9b305')
        inSideImage.append("image", event.target.files[0]);

        // Send a POST request
        axios.post('https://api.imgbb.com/1/upload',
            inSideImage
        )
            .then(function (response) {
                setInSideImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleNewCourse = (event) => {
        event.preventDefault()
        const courseTitle = document.getElementById('courseTitle').value;
        const courseCreteBy = document.getElementById('courseCreteBy').value;
        // const mainFontImg = document.getElementById('mainFontImg').files[0];
        const courseDuration = document.getElementById('courseDuration').value;
        // const insideImg = document.getElementById('insideImg').value;
        const CourseFee = document.getElementById('CourseFee').value;
        const courseDescription = document.getElementById('courseDescription').value;


        const courseData = { title: courseTitle, create: courseCreteBy, mainFontImage: fontImageURL, duration: courseDuration, fee: CourseFee, inSideImage: inSideImageURL, description: courseDescription };
       

        fetch('https://nextit-center.herokuapp.com/addNewCourse', {
            method: "post",
            body: JSON.stringify(courseData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(result => {
                 if(result){
                    toast.success("Course add successfully!" , {position:"top-center"});
                 }
            })

    }
    return (
        <div>
            <form onSubmit={handleNewCourse}>
                <div className='container'>
                    <h1>Add new course here</h1>
                    <div class="mb-3">
                        <label for="courseTitle" class="form-label">Course title</label>
                        <input type="text" class="form-control" id="courseTitle" name="courseTitle" placeholder="course title" required />
                    </div>
                    <div class="mb-3">
                        <label for="courseCreteBy" class="form-label">Course create by </label>
                        <input type="text" class="form-control" id="courseCreteBy" name="courseCreteBy" placeholder="Course create by" required />
                    </div>
                    <div class="mb-3">
                        <label for="mainFontImg" class="form-label">Main font img for course 300x200</label>
                        <input class="form-control" type="file" onChange={handleFontImg} required />
                    </div>
                    <div class="mb-3">
                        <label for="courseDuration" class="form-label">Course duration </label>
                        <input type="text" class="form-control" id="courseDuration" name="courseDuration" placeholder="course duration" required />
                    </div>
                    <div class="mb-3">
                        <label for="insideImg" class="form-label">Main big img for course in side </label>
                        <input class="form-control" type="file" onChange={handleInsideImage} required />
                    </div>
                    <div class="mb-3">
                        <label for="CourseFee" class="form-label">Course Fee</label>
                        <input type="text" class="form-control" id="CourseFee" name="CourseFee" placeholder="Course Fee" required />
                    </div>
                    <div class="mb-3">
                        <label for="courseDescription" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="courseDescription" name="courseDescription" rows="3" required></textarea>
                    </div>
                </div>
                <div className='text-center  py-5'>
                    <input type="submit" value="add new course" />
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddNewCourse;
