import React from 'react'
import '../main.scss'
import { NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
const Signup2 =() => {


    return(
       <>
           <header >
                <nav className=" navbar navbar-expand-lg navbar-light navbar-fixed" >
                    <a className="navbar-brand" style = {{paddingLeft: "60px" }} href="#">COMPNAME</a>
                </nav>
            </header>

            <div class="signupcontainer">
            <div className="signupcontent">
                <form >
                    <h2 className="title">Create Account</h2>
                    <div className="gfbutton">
                        <button className="signupbtn1 signupbtng"><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#DB4437" }}>o</span><span style={{ color: "#F4B400" }}>o</span><span style={{ color: "#4285F4" }}>g</span>l<span style={{ color: "#DB4437" }}>e</span>
                        </button>
                        <button className=" signupbtn1 signupbtnf" >facebook</button>
                        <div>
                            <p className="textor"> -OR-</p>
                        </div>
                    </div>
                    <MDBInput label="Full Name" className="grey-text" group type="email" error="wrong"
                  success="right" />

                    <MDBInput label="Email" className="grey-text" group type="email"  error="wrong"
                  success="right" />
                  <MDBInput label="Password" className="grey-text" group type="password"  />
                       <MDBInput label="Password" className="grey-text" group type="password"  />
                        
                            <button className="signupbtn" >SignUp</button>
                
                            <div> <span >Already have an account? <NavLink to="/Login"id="link">Login here</NavLink> </span> </div>
                            </form>
                        </div>

                <img class="wave" src="/images/Mobile-login.png"/>

                </div>
    
       </>
    );
}

export default Signup2;
