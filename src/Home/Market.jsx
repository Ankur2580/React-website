import React from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBook, faFilm, faLaptopCode, faMusic, faObjectGroup, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'


const Market =() => {
    return (
        <>
        <div className=" container-fluid padding">
        <h4 className="exploremarkethead">Explore The Market</h4>
        <div className="row text-center padding" >
            <div className="col-xs-12 col-sm-6 col-lg-4" style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faObjectGroup} size="4x"  />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Graphic Design</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4 "  style={{marginBottom: "50px"}}>
             <FontAwesomeIcon icon={faFilm} size="4x" />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Film</h3>
            </div>
            <div className="col-sm-12 col-lg-4"  style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faBook} size="4x"  />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Writting</h3>

            </div>
        </div>
        <div className="row text-center padding" style={{marginBottom: "80px"}}>
            <div className="col-xs-12 col-sm-6 col-lg-4" style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faMusic} size="4x"  />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Music And Audio</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4 "  style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faLaptopCode} size="4x"  />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Programming</h3>
            </div>
            <div className="col-sm-12 col-lg-4"  style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faPhotoVideo} size="4x"  />
                <h3 style={{fontWeight: "400" , fontSize: "20px"}}>Photography</h3>

            </div>
        </div>
    </div>

    <section >
    <h4 style={{margin: "40px 25px 40px 25px",textAlign: "center",fontWeight: "1000"}}><b>Get Your Work Done With Confidence</b></h4>
  <div className="row rowggg">
   <div className="cardget1 cardget ">
      <span className="containerget">
      <span>
      <img src="/images/tickmark.png" style={{marginRight: "20px"}} alt="..." />
      </span>
      <span>
      <h4 style={{letterSpacing :"1.5px" , color: "#4ABDAC" , fontWeight: "800"}}>We are here 24/7.</h4>
      <p style={{fontSize: "19px" , letterSpacing: "1px" , color: "#4ABDAC" }}>Reach us anytime! We have your back.</p>
      </span>
     
    </span> 
   </div>
    <div className= "cardget2 cardget">
      <span className="containerget">
      <span>
      <img src="/images/tickmark.png" style={{marginRight: "20px"}} alt="..." />
      </span>
      <span>
      <h4 style={{letterSpacing: "2px" , color: "#4ABDAC" , fontWeight: "800"}}>Know the price.</h4>
      <p style={{fontSize: "19px" , letterSpacing: "1px" , color: "#4ABDAC" }}>Know the exact price for any service.</p>
      </span>
     
    </span> 
   </div>
   </div>
 </section>

        </>
    );
}
export default Market;