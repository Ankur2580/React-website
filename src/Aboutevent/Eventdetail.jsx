import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

const Eventdetail = () => {
    return (
        <>
            <section>

                <div className="container" style={{ paddingRight: "0px " , marginRight: "0px" }}>

                    <div className="row mb-5 pt-2 pb-5">
                        <div className="col-lg-6 col-md-6 col-12 " id="dance">
                            <h1 className="mb-4">Artopher Dance</h1>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi a,
                            inventore reiciendis esse voluptas nisi minima adipisci! Provident maiores obcaecati veritatis
                            repellendus sapiente inventore deleniti quas cum. Consequuntur, fuga</p>
                            <div>
                                <h3 id="timer"></h3>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-12 ">

                            <img src="/images/Img_1.png" className="img-fluid" style={{ padding: "none" }} />


                        </div>

                    </div>

                </div>
            </section>

            <section>
		<div className="container" style={{paddingLeft: "0px" , marginLeft: "1px" , marginRight: "0px " }}>
			<div className="row mb-5 ">
				<div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
					<img src="/images/Img_2.png" className="img-fluid" />
				</div>

				<div className="col-lg-6 col-md-6 col-sm-6 col-12 " id="address">
					<h3 className="mb-4">About the Event</h3>
					<p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi a,
						inventore reiciendis esse voluptas nisi minima adipisci! Provident maiores </p>
					<p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi a,
						inventore reiciendis esse voluptas nisi minima adipisci! Provident maiores obcaecati veritatis
					</p>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-6 ">
								<h6> <img src="/images/location.svg" />  Location</h6>
								<p> Somewhere,Pune,<br />Maharashtra
								</p>
							</div>

							<div class="col-lg-6 col-md-6 col-6 ">
								<h6> <img src="/images/Contact_icon.svg" /> Time</h6>
								<p> Monday to Thrusday<br /> 9:30 AM </p>
							</div>
						</div>
					</div>

				</div>



			</div>
		</div>
	</section>

    <section>
		<div className="container" style={{ paddingRight: "0px " , marginRight: "0px" }}
        >
			<div className="row mb-5 pt-2 pb-5">
				<div className="col-lg-6 col-md-6 col-sm-6 col-12 ">

					<div className="mb-3">
						<h2 className="mb-4">Contact</h2>
						<p> <img src="/images/Contact_icon.svg" /> +91 123456789 </p>

					</div>
					<div>
						<p> <img src="/images/Link.svg"/> https//:ptani.com/event/artopherdance</p>
					</div>

				</div>

				<div className="col-lg-6 col-md-6 col-12 ">
					<img src="/images/Img_3.png" className="img-fluid" />
				</div>

			</div>
		</div>
	</section>

        </>
    );
}

export default Eventdetail;