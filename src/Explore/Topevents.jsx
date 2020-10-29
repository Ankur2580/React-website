import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import '../main.scss';



const Topevents = () => {

    function toggle() {
      
        var x = document.getElementById("topevents");
        if (x.style.display == "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    }

    return (
        <>
        
        <div style={{boxShadow: "0 -2px 12px rgba(0,0,0,0.2)"}}>
			<button onClick={toggle} type="button" className="btn btn-light btn-lg btn-block btn-updates exp_update" id="ads">
				Updates of Top Events &nbsp;&nbsp;&nbsp;<i className="far fa-caret-square-down dropicon"></i>
			</button>
		</div>
            <section>
                <div className="container-fluid">


                    <div className="row  p-2">



                        <div className="col-lg-3 col-md-3 " id="topevents">

                            <div className="col-lg-12 col-md-12 row container-fluid pb-3 mb-3" id="topeventlist">

                                <h5 style={{ color: "grey" }}>Top Events</h5>
                                <div style={{ fontSize: "13px", paddingBottom: "20px" }}>
                                    <p>
                                        <span className="topeventheads">Artopher Dance:</span> Lorem ipsum dolor sit amet
								consectetur
								adipisicing elit. Corrupti sit necessitatibus deserunt excepturi totam,
								culpa.<br />
                                    </p>

                                    <p>
                                        <span className="topeventheads">Artopher Dance:</span> Lorem ipsum dolor sit amet
								consectetur
								adipisicing elit. Corrupti sit necessitatibus deserunt excepturi totam,
								culpa.<br />
                                    </p>

                                    <p>
                                        <span className="topeventheads">Artopher Dance:</span> Lorem ipsum dolor sit amet
								consectetur
								adipisicing elit. Corrupti sit necessitatibus deserunt excepturi totam,
								culpa.<br />
                                    </p>
                                    <p>
                                        <span className="topeventheads">Artopher Dance:</span> Lorem ipsum dolor sit amet
							consectetur
							adipisicing elit. Corrupti sit necessitatibus deserunt excepturi totam,
							culpa.<br />
                                    </p>

                                </div>






                            </div>
                            <div>
                                <p><img src="/images/ADS.svg" class="img-fluid z-depth-4 rounded" /></p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-4 col-12 pb-2 mb-2 column-2">
                            <h3 style={{ color: "grey", marginBottom: "20px" }}>Explore<br /></h3>
                            <div className="postbox " >
                                <div className="mb-2">
                                    <img src="/images/user_pic.svg"
                                        style={{ border: "2px solid black", borderRadius: "50%", margin: "15px" }} class="mb-2 ml-1" />
						Eminem Mishra

					</div>

                                <p>

                                    <textarea name="Text1" placeholder="What do you have in mind? Show Your work?" cols="80" rows="3" className="postarea" autofocus="autofocus"></textarea>
                                </p>
                                <div> <img src="/images/Instagraam.svg" class="mb-1 ml-3" /> Photos/Videos
					</div>
                            </div>



                            <div className="container-fluid posts">
                                <div className="row mb-2 ">


                                    <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                        <img src="/images/user_pic.svg" 
                                            style={{ border: "1px solid black", borderRadius: "50%", marginLeft: "2px" }} className="mb-4" id="miniimage"/>

                                    </div>



                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                        <div className="ml-2  mb-4">
                                            <h6 style={{ fontWeight: "100px" }}>Eminem Mishra </h6>
                                            <h6 style={{ color: "grey", fontWeight: "50px" }}>Mon, 4 Sep</h6>
                                        </div>

                                        <div>
                                            <p style={{ color: "grey", marginTop: "15px" }}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officia minima,
                                                quas
                                                animi qui iure. Aliquid, aliquam. Vero facere fugit enim sit ad quo dolorem
                                                dolor?
                                                Odit adipisci quod beatae nostrum architecto explicabo, repellat, voluptatum cum

								</p>
                                        </div>

                                        <div>
                                            <img src="/images/Img_2@2x.png" class="img-fluid" />
                                        </div>


                                    </div>





                                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>
                                    </div>
                                </div>




                            </div>
                        </div>


                        <div className="col-lg-2 col-md-2 d-none d-lg-block connectionpad">

                            <div className="row text-center" style={{ alignContent: "center" }}>


                                <h5 className="connectionpad" style={{ fontWeight: "500", color: "grey" }}>Connections</h5>
                                <ul className="list-unstyled" style={{ size: "small" }}>
                                    <li style={{ color: "grey", verticalAlign: "middle" }}>
                                        <img src="/images/user_pic.svg" 
                                            style={{ border: "1px solid black", borderRadius: "50%"  }}
                                        /> <span className="miniconnections">Eminem Mishra</span>
                                    </li>
                                    <li style={{ color: "grey" }}>
                                        <img src="/images/user_pic.svg" 
                                            style={{ border: "1px solid black ", borderRadius: "50%" }}
                                            className="mb-1 " /> <span className="miniconnections">Eminem Mishra</span>
					                </li>
                                    <li style={{ color: "grey" }}>
                                        <img src="/images/user_pic.svg" 
                                            style={{ border: "1px solid black ", borderRadius: "50%"}}
                                            className="mb-1 " /><span className="miniconnections">Eminem Mishra</span>
					                </li>

                                    <li style={{ color: "grey" }}>
                                        <img src="/images/user_pic.svg"
                                            style={{ border: "1px solid black ", borderRadius: "50%"}}
                                            className="mb-1 " /><span className="miniconnections">Eminem Mishra</span>
					                </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </section>





        </>
    );
}

export default Topevents;