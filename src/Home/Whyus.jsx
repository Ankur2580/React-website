import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faFolder, faThumbsUp, faUserTie } from '@fortawesome/free-solid-svg-icons'
const Whyus =() => {
    return(
        <>
        <div className =" container-fluid padding">
        <h4 className="whyushead">Why Us?</h4>
        <div className="row text-center padding" style={{marginBottom: "80px"}}>
            <div className="col-xs-12 col-sm-6 col-lg-4" style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faUserTie} size="4x" />
                <h3 style={{fontWeight: "400" , fontSize: "29px"}}>24/7 Support</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4 "  style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faFolder} size="4x" />
                <h3 style={{fontWeight: "400" , fontSize: "29px"}}>Browse Portfolio</h3>
            </div>
            <div className="col-sm-12 col-lg-4"  style={{marginBottom: "50px"}}>
            <FontAwesomeIcon icon={faThumbsUp} size="4x" />
                <h3 style={{fontWeight: "400" , fontSize: "29px"}}>Quality Work</h3>

            </div>
        </div>
    </div>
    </>
    );
}

export default Whyus;