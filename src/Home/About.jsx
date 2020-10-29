import React from 'react';

const About =() => {
    return (
        <>
        <section className ="container-fluid" id="aboutussection">
        <h4 className="aboutushead">About Us</h4>
        <div className="row" >
        <div className="col-xs-12 col-sm-12 col-md-8">
            <p className="abouttext">Kumonic is a one of its kind social networking platform for Artists to collaborate and network with Artists and get recognised globally. Join us and enjoy a range of service in a click.</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 aboutimg">
            <img style={{alignItems: "right"}} src="/images/aboutusvector.png" />
        </div>
        </div>
</section>
        </>
    );
}

export default About;
