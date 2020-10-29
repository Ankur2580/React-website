import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../main.scss';
const Navuser = () => {
    return (
        <>
            <header>
                <nav className=" navbar navbar-expand-lg navbar-light navbar-fixed">
                    <a className="navbar-brand" style={{ padding: "0 20px 0 60px", textDecoration: "none" }} href="#">COMPNAME</a>
                </nav>
            </header>
        </>
    );
}

export default Navuser;