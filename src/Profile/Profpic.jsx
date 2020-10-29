import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import '../main.scss';
const Profpic =() => {
    return (
      <> 
          
	<main>
		<section className="row profile flex-row-reverse">
			<div className="col-md-5 col-xs-12 rightprofile">
				<img src="" class="img-fluid" alt="Profile Picture" />
			</div>

			<div className="col-md-7 col-xs-12  leftoneprofile " style={{paddingLeft: "60px"}}>
				<h3 style={{fontWeight: "1000" ,
				fontSize: "20px" , letterSpacing: "4px" }}>HELLO</h3>
				<h1 style= {{fontWeight: "1000" , fontSize: "50px" , textShadow: "2px 0" , letterSpacing: "3px" }}
                ><b >I'm <span style={{color: "#F7B733"}}> Billy <br /> Anderson </span></b>  <spacer /> </h1>
				<h3 style={{letterSpacing: "2px" , marginTop: " 30px"}}>A freelance Web Developer</h3>
				<br />
				<a href="#" id="hire"> Hire me</a>

			</div>

		</section>
	</main>

	<section className="pagebody">
		<article style={{padding:"4%" , paddingTop: "0px" }}>
			<div>
				<h2 style={{fontWeight: "1000" , fontSize: "36px" , letterSpacing: "3px" , marginBottom: "20px" , textShadow: "-1px 0"}}>
					About Me
				</h2>
				<p style={{color: "#AAA" , letterSpacing: "1px" , fontSize:"20px" , fontWeight: "lighter" }}>
					Since all Weblium templates are developed on the basis of deep study of the niche and harmoniously code the most current trends in web design, sometimes it's enough to simply choose a template, add your own unique content and get a beautiful webiste with perfect navigation for your type of buisness!.
				</p>

			</div>
		</article>

		<div style={{background: "#f4f4f4" , borderRadius: "30px" , paddingBottom: "30px" }}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6   skillcarddiv" style={{padding: "40px" , paddingLeft: "7%" }}>

                        <img src="/images/WEBSITE.png"alt="" className="skillcards" />
                        <img src="/images/software.png" alt="" className="skillcards" />
                        <img src="/images/Logo_design.png"alt="" className="skillcards" />
                        <img src="/images/application.png" alt="" className="skillcards" />
                    </div>
                    <div className="col-xs-12 col-md-6 details" style={{paddingTop: "60px"}}>
                        <h2 style={{marginBottom: "12%" , fontWeight: "bold" , textShadow: "1px 0px" , letterSpacing: "2px" , fontSize: "27px" }}>PERSONAL DETAILS</h2>
                        <span style={{lineHeight: "50px" , fontSize: "20px" , letterSpacing: "1px" }}><p> Full Name&nbsp;: Let the name be x</p>
                            <p> College&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Massachusets Maharashtra</p>
                            <p> Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
                            <p> Address&nbsp;&nbsp;&nbsp;&nbsp;: Kahi to rehta he hoga</p>
                            <p> Mobile No.: </p>
                            <p> Email Id&nbsp;&nbsp;&nbsp;&nbsp; : </p>
                            <p> Website&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
                        </span>
                    </div>
                </div>
            </div>

		</section>
      </>
    );
}

export default Profpic;