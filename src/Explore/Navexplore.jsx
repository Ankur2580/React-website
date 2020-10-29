import React from 'react';
 
const Navexplore = () => {

    function toggle() {
        //    console.log("click")
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
			<button onClick={toggle} type="button" className="btn btn-light btn-lg btn-block btn-updates" id="ads">
				Updates of Top Events &nbsp;&nbsp;&nbsp;<i className="far fa-caret-square-down dropicon"></i>
			</button>
		</div>
        </>
    );
}

export default Navexplore ;