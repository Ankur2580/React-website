import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../main.scss';


const Formuser = () => {

    // const editName = (number) => {
    //     document.getElementById('edit'+ number).readOnly=false;
    //     document.getElementById('edit' + number).focus();
    //     };

    return (
        <>
            <div className="container-fluid userimg">


                <div className="row mb-5">
                    <div className="col-lg-4 col-md-4">
                        <img src="/images/Profile_photo_place.png" id="profile" />
                    </div>

                    <div className="col-lg-8 col-md-8" style={{ marginTop: "60px" ,width: "100%"}}>
                        <section className="userprofform">
                            <div className="personal" >PERSONAL DETAILS</div>
                            <br />
                            <form action="index.html" id="details">
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="fullname"> Full Name </span>
                                        <span> : <input type="text" placeholder="Eminem Mishra" id="edit1" className="userprofname" />
                                            <img src="/images/edit.png"  className="userprofcut" />
                                        </span>

                                    </div>
                                </div>
                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="username"> Username </span>
                                        <span> : <input type="text" placeholder="@Eminem " id="edit2" className="userprofname" />
                                            <img src="/images/edit.png"   className="userprofcut" />
                                        </span>

                                    </div>
                                </div>

                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userprofphone"> Phone</span>
                                        <span>: <input type="text" placeholder="+91 123456789" id="edit3" className="userprofname" />
                                            <img src="/images/edit.png"    className="userprofcut" />
                                        </span>


                                    </div>
                                </div>

                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userprofemail"> Email </span>
                                        <span> : <input type="text" placeholder="eminem@gmail.com" id="edit4" className="userprofmail" />
                                            <img src="/images/edit.png"   className="userprofcut" />
                                        </span>

                                    </div>
                                </div>

                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userprofweb"> Website </span>
                                        <span> : <input type="text" placeholder="www.rapgod.com" id="edit5" className="userprofmail" />
                                            <img src="/images/edit.png"   className="userprofcut" />
                                        </span>

                                    </div>
                                </div>

                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userprofpassword"> Password </span>
                                        <span> : <input type="text" placeholder="Change Password" id="edit6" className="userprofname" />
                                            <img src="/images/edit.png"   className="userprofcut" />
                                        </span>

                                    </div>
                                </div>

                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userproftagline"> Tagline </span>
                                        <span> : <input type="text" placeholder="Ex. Freelancer" id="edit7" className="userproftag" />
                                            <img src="/images/edit.png"  className="userprofcut" />
                                        </span>

                                    </div>
                                </div>


                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span className="userprofart"> Artform </span>
                                        <span> : <input type="text" placeholder="Ex. Graphic designer" id="edit8" className="userproftag" />
                                            <img src="/images/edit.png"    className="userprofcut" />
                                        </span>

                                    </div>
                                </div>




                                <br />
                                <div className="userprofinput-div">
                                    <div className="i">
                                    </div>
                                    <div>
                                        <span> <span className="userprofmyself">About me </span></span>
                                        <span> : <input type="text" id="edit9" className="userprofabout" />
                                            <img src="/images/edit.png"   className="userprofrate" />
                                        </span>

                                        <span>
                                            <button className="userprofbtn">Save</button>
                                            <button className="userprofbtn1">Cancel</button>
                                        </span>
                                    </div>
                                </div>

                            </form>

                        </section>

                        <div className="connections">
                    <p style={{fontSize: "1.3em" , fontWeight: "bold" }}>Link your social handles</p>
                    <br />
                    <div className="mb-4">
                        <span style={{marginLeft: "20px" }}>
                            <img src="/images/insta@2x.png" style={{width: "50px" , height: "auto" }} />

                            <span style={{marginLeft: "15px"}} > <input readonly placeholder="@Eminem" className="userprofname" />
                            </span>

                        </span>
                    </div>

                    <div className="mb-4">
                        <span style={{marginLeft: "20px" }}>
                            <img src="/images/insta@2x.png" style={{width: "50px" , height: "auto" }} />

                            <span style={{marginLeft: "15px"}} > <input readonly placeholder="@Eminem" className="userprofname" />
                            </span>

                        </span>
                    </div>

                    <div className="mb-4">
                        <span style={{marginLeft: "20px" }}>
                            <img src="/images/insta@2x.png" style={{width: "50px" , height: "auto" }} />

                            <span style={{marginLeft: "15px"}} > <input readonly placeholder="@Eminem" className="userprofname" />
                            </span>

                        </span>
                    </div>

                    
                    <div className="mb-4">
                        <span style={{marginLeft: "20px" }}>
                            <img src="/images/insta@2x.png" style={{width: "50px" , height: "auto" }} />

                            <span style={{marginLeft: "15px"}} > <input readonly placeholder="@Eminem" className="userprofname" />
                            </span>

                        </span>
                    </div>


                </div>



                    </div>

                </div>
            </div>

        </>
    );
}

export default Formuser;