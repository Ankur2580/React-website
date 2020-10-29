import React from 'react';
import '../main.scss'
import Navabout from './Navabout';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Eventdetail from './Eventdetail';
import Footer from '../Profile/Footer';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const Aboutevent = () => {
    return (
        <>
            <Navabout />
            <Eventdetail />
            <Footer />
        </>
    );
}

export default Aboutevent;