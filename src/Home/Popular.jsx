import React from 'react';



const Popular = () => {
    return (
        <>
            <div id="servicesec">
                <h4 style={{ margin: "40px 0", textAlign: "center", fontWeight: "1000" }}>Popular Services</h4>
                <div className="row" style={{ margin: "50px 20px 70px 20px" }}>
                    <div className="graphic" style={{ margin: "30px auto" }}>
                        <img src="/images/graphic_design2x.png" className="graphic" style={{ width: "250px" }} /> </div>


                    <div className="graphic" style={{ margin: "30px auto" }} >
                        <img src="/images/developer2x.png" className="graphic" style={{ width: "250px" }} /> </div>


                    <div className="graphic" style={{ margin: "30px auto" }}>
                        <img src="/images/writter2x.png" className="graphic" style={{ width: "250px" }} /> </div>


                    <div className="graphic" style={{ margin: "30px auto" }}>
                        <img src="/images/musician2x.png" className="graphic" style={{ width: "250px" }} /> </div>


                    <div className="graphic" style={{ margin: "30px auto" }}>
                        <img src="/images/director2x.png" className="graphic" style={{ width: "250px" }} /> </div>



                </div>
            </div>


 

        </>
    );
}

export default Popular;
