import React from 'react';
import logo from '../../images/next-it-logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div style={{ marginBottom: "100px" }}>
            <div className='navbar-container fixed-top '   >
                <div className='container  '  >
                    <nav class="navbar navbar-expand-lg navbar-light bg-light   "    >
                        <div class="container-fluid">
                            <img class="navbar-brand" src={logo}></img>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 " >
                                    <li class="nav-item"  >
                                        <NavLink exact activeClassName="active" className="link" to="/">Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="active" className="link" to="/course">Course</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="active" className="link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li class="nav-item login-btn">
                                        <NavLink exact activeClassName="active" className="link" to="/login">Login</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;