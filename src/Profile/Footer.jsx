import React from 'react';

const Footer = () => {
    return (

        <>
                 <footer className="page-footer font-small  pt-4" style={{boxShadow: "0 -2px 12px rgba(0,0,0,0.2)" , marginTop: "50px"}}>
	<div className="container-fluid text-center text-md-left"  >
		
		<div className="row ">
			
			<hr className="clearfix w-100 d-md-none pb-3" />

			<div className="col-md-2 mb-md-0 mb-3 footeredit" style={{lineHeight: "40px"}}>
				
				<h5 style={{fontWeight: "1000"}}>Catergories</h5>
				<ul className="list-unstyled">
					<li>
						<a href="#!" className= "footerlinks">Programming</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Media & Photography</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Graphic Design</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Video & Animation</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Music & Audio</a>
					</li>
					<li>
						<a href="#!"  className= "footerlinks">Film</a>
					</li>
				</ul>
			</div>
			<div className="col-md-2 mb-md-0 mb-3 footeredit" style={{lineHeight: "40px" }}>
			
				<h5 style={{fontWeight: "1000"}}>Support</h5>
				<ul className="list-unstyled">
					<li>
						<a href="#!"  className= "footerlinks">Contact Us</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">FAQs</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Help</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Join as Creator</a>
					</li>
				</ul>
			</div>
			<div className="col-md-2 mb-md-0 mb-3 footeredit" style={{lineHeight: "40px" }}>
				
				<h5 style={{fontWeight: "1000"}}>Community</h5>
				<ul className="list-unstyled">
					<li>
						<a href="#!" className= "footerlinks">Form</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Invite a friend</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">Blogs</a>
					</li>
					<li>
						<a href="#!" className= "footerlinks">How to become Creator</a>
					</li>
				</ul>
			</div>
			<div class="col-md-6 mt-md-0 mt-3" style={{background: "#ffbb33" , padding: "180px 50px" , lineHeight: "40px" , letterSpacing: "1px"}}>
				
				<div style={{float: "left" , marginRight: "20px" }}>
					<p><b>Contact:</b>  +91 123456789</p>
					<p><b>Email:</b>  contact@ourcompany.com </p>
				</div>
				<div className="vl" id="verticalline">
					<ul>
						<li>
							<p> @company</p>
						</li>
						<li>
							<p> @company</p>
						</li>
						<li>
							<p> @company</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
	<div class="footer-copyright text-center py-3 " style={{margin:"10px 0" }}>© 2020 Copyright:
		<a href=""> ourwebiste.com.</a> All rights reserved.
	</div>
</footer>


        </>
    );
}

export default Footer;