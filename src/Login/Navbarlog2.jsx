import React, { useEffect, useState } from 'react';
import '../main.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';




const Navbarlog2 = () => {


  return (
    <>
      <header >
        <nav className=" navbar navbar-expand-lg navbar-light navbar-fixed" >
          <a className="navbar-brand" style={{ padding: "0 20px 0 60px" }} href="#">COMPNAME</a>
        </nav>
      </header>

      <div class="logincontainer1">
        <div className="login-content">
          <form >
            <h2 className="title">Welcome, Please login<br />to your account</h2>
            <div className="gfbutton">
              <button className="loginbtn1 loginbtng"><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#DB4437" }}>o</span><span style={{ color: "#F4B400" }}>o</span><span style={{ color: "#4285F4" }}>g</span>l<span style={{ color: "#DB4437" }}>e</span>
              </button>
              <button className=" loginbtn1 loginbtnf" >facebook</button>
              <div>
                <p className="textor"> -OR-</p>
              </div>
            </div>
            
            <MDBInput label="Email" className="grey-text" group type="email" validate error="wrong"
                  success="right" />
           <MDBInput label="Password" className="grey-text" group type="password" validate />
            <a href="#" id="forgot">Forgot Password?</a>


           
            <NavLink to="/Profile" id="logbtn1" >Login</NavLink>
            <button className="loginbtn" ><Link to="/Signup" id="logbtn2">Signup</Link> </button>
            

          </form>
        </div>

        <img class="wave" src="/images/Mobile-login.png" />

      </div>

    </>
  );

  };




export default Navbarlog2;

