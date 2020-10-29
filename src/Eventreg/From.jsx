import React from 'react' ;
import '../main.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    return (
      <>
        <section className= "regform">
		<h2>Fill Our Form To Host Your Event</h2>
		<br />
		<form action="index.html" id="registerform">
			<div className="reginput-div regone">
				<div className="i">
				</div>
				<div className="div">
					<h5>Event Name</h5>
					<input type="text" className="reginput" />


				</div>
			</div>
			<div className="reginput-div ">
				<div className="i"> 

				</div>
				<div className="div">
					<h5>Event Registration Link(if any)</h5>
					<input type="text" className="reginput" />
				</div>
			</div>
			<div className="reginput-div ">
				<div className="i"> 

				</div>
				<div class="div">
					<h5>Event Location</h5>
					<input type="text" class="reginput" />
				</div>
			</div>
			<div className="reginput-div ">
				<div className="i"> 

				</div>
				<div className="div">
					<h5>Contact</h5>

					<div id="ID91">
						<span>+91</span>
					</div>
					<input type="tel" className="reginput regphone" placeholder="92134-56789" pattern="[0-9]{5}-[0-9]{5}" required />
				</div>

			</div>
			<div className="reginput-div">
				<div className="i"> 

				</div>
				<div className="div">
					<h5 style={{fontSize: "1.25rerm" , marginBottom: "2.5rem"}}>Event Date & Time</h5>
				</div>
			</div>
			<div className="reginput-div regpass">
				<div className="i"> 

				</div>
				<div className="div">

					
					<input type="date" className="reginput regdate" />

				</div>
			</div>
			<div className="reginput-div regpass">
				<div className="i"> 

				</div>
				<div class="div">

					
					<input type="time" className="reginput regtimes" />

				</div>
			</div>
			<div className="reginput-div regformdes">
				<div className="i"> 

				</div>
				<div className="div">
					<h5>Event Description</h5>
					<input type="text" className="reginput" />
				</div>
			</div>

			<div className="regcenter">

				<div className="regdropzone">
                <FontAwesomeIcon icon={faCamera} size="3x" style={{verticalAlign: "middle" , marginTop: "35px"  }} /> 					<input type="file" className="upload-input" />
				</div>
				<div style={{marginLeft: "7%"}}>
					<h5>Upload Images</h5>
					<p>Share images of the event</p>
				</div>
			</div>
			<div className="reginput-div regsubmit">
			<input type="submit" className="btnsubmit" value="Submit" />
			</div>
		
		</form>
	</section>

    <footer>
		<div className="footer-copyright text-center py-3 " style={{margin: "0" }}>© 2020 Copyright:
			<a href=""> ourwebiste.com.</a> All rights reserved.
		</div>
	</footer>


      </>
    );
}

export default Form;