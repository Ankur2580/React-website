import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../main.scss';
import {NavLink} from 'react-router-dom'

const Navprofile =() => {
    return(
        <> 
        <header>
		<nav className=" navbar navbar-expand-lg navbar-light navbar-fixed" >
			<a className="navbar-brand" style={{padding: "0 20px 0 4%" }} href="#">COMPNAME</a>
			
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: "4%" }}>

				<span className="navbar-toggler-icon" ></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<NavLink className="nav-link " to="/Event">Events </NavLink>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Create</a>
					</li>
					<li className="nav-item">
						<a class="nav-link" href="#">Sign Up</a>
					</li>
					<li className="nav-item" >
						<a className="nav-link cur-nav" href="#"  >My Profile <span class="sr-only">(current)</span></a>
					</li>
				</ul>
			</div>
		</nav>
	</header>

        </>
    );
}

export default Navprofile;