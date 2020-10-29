import React from 'react';
import Navuser from './Navuser';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../main.scss';
import Formuser from './Formuser';

const Userprofile = () => {
    return (
        <>
            <Navuser />
            <Formuser />
           
        </>
    );
}

export default Userprofile;