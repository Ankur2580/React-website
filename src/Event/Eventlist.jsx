import React from 'react';
import '../main.scss';

const Eventlist = () => {
    return (
       <>
      
       <section className="row eventlistmain">
		<aside className="sortingsec col col-md-3 col-sm-0">
			
			<div className= "eventsorter">
				<h5 style={{marginBottom: "20px"}}>Categories</h5>
				<form>
					<input type="search" name="" class= "categorysearch" /><br />
					<br />
					<div className= "checkboxform">
					<div className="form-check ">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className ="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check ">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" for="inlineCheckbox1">Catergory 1</label>
					</div>
				</div>
				<h5 style={{marginBottom: "25px" }}>Timings</h5>
				<div className="eventinput-div eventpass">
				
				<div className="div">

					<label style={{marginBottom: "0px"}} className="labeldate">Date</label>
					<input type="date" className="eventinput eventdate" />

				</div>
			</div>
			<div className="eventinput-div eventpass">
				<div className="div">

					<label style={{marginBottom: "0px"}}>Time</label><br />
					<input type="time" className="eventinput eventtimes" />

				</div>
			</div>
			</form>
		</div>
	</aside>

	<section className= "eventcardsec col-12 col-sm-12 col-lg-8">
		<div className="eventcard">
			<div className="eventcardimage col-12 col-lg-6">
				<img style={{objectFit: "cover"}} src="/images/Photo.png" />
				<div><p className="eventimagecategory">Photography</p></div>
				
			</div>
			<div className="eventcardtext col-12 col-lg-6">
				<img src="/images/location.svg" alt="location" /><span className= "eventcardlocation">MIT ADT University, Loni</span>
				<h3 className="eventcardheading"> Artopher Photography</h3>
				<p className="eventcardextract">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
				</p>
				<button className="eventregister">Register</button>
			</div>
		</div>

	</section>

    </section>

       </> 
    );
}

export default Eventlist;