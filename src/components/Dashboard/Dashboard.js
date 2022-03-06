import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div>
            <div className='dash-nav-outer-section navbar-light bg-light fixed-top '>
                {/* // navbar start */}
                <div className="container">
                    <nav class="navbar navbar-expand-lg  ">
                        <div class="container-fluid">
                            
                            <Link class="navbar-brand" to="/dashboard">Dashboard</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Course
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link class="dropdown-item" to="/addNewCourse">Add new course</Link></li>
                                            <li><Link class="dropdown-item" to="/viewAllCourse">View all course</Link></li>
                                            <li><Link class="dropdown-item" to="/updateDelete">Update & delete course</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to="/contactMessage">Message</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link " aria-current="page" to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* //navbar end  */}

               
                   
                     
                
                   
            </div>
            <br />
            <br />
            <br />
          
        </div>
    );
};

export default Dashboard;