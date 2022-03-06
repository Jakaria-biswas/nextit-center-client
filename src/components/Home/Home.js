import React from 'react';
import Contact from '../Contact/Contact';
import CourseIntro from '../CourseIntro/CourseIntro';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainCourse from '../MainCourse/MainCourse';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <CourseIntro></CourseIntro>
            <MainCourse></MainCourse>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;