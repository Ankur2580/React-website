import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons'


const Footerprofile = () => {
    return (

        <>
            <section className="pagebody">
                <div className="footerprofile">
                    <h2 className="footercontact ">
                        CO<span className="contactunderline">NTA</span>CT
                            </h2>

                    <div className="col-md-6 mt-md-0 mt-3" style={{padding: "50px 50px" , lineHeight: "40px" , letterSpacing: "1px" ,margin: "auto" }}>
                      
				<div style={{float: "left" , marginRight: "20px " , marginTop: "40px"}}>
                            <p><b>Contact:</b>  +91 123456789</p>
                            <p><b>Email:</b>  contact@ourcompany.com </p>
                        </div>
                        <div className="socialmediaicon" style={{marginTop: "-30px"}}>
                            <ul className="vlprofile">
                               
                                <li>
                                    <p><i className="fab fa-twitter-square fa-3x"></i> @company</p>
                                </li>
                                <li>
                                    <span><i className="fab fa-twitter-square fa-3x"></i> @company</span>
                                </li>
                                <li>
                                    <span><i className="fab fa-facebook-square fa-3x"></i> @company</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <h3 style={{textAlign: "center" , marginTop: "-40px"}}> -OR-</h3>
                <div className="footerbutton">
                    <a href="#" ><button className="footerthrough">CONTACT THROUGH US</button></a>
                </div>
            </section>
        </>
    );
}

export default Footerprofile;