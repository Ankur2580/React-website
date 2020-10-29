import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <header>
                <nav className=" navbar navbar-expand-lg navbar-light navbar-fixed" >
                    <a className="navbar-brand" style={{ padding: "0 20px 0 60px" }} href="#">COMPNAME</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li clasName="nav-item active">
                                <a className="nav-link cur-nav" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicesec">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutussection">About Us</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">Log In</NavLink>
                            </li>
                            <li className="nav-item" style={{ paddingRight: "60px" }} >
                                <NavLink className="nav-link" to="/Signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    );
}


export default Navbar;

