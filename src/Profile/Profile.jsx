import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Navprofile from './Navprofile';
import Profpic from './Profpic';
import Work from './Work';
import Portfolio from './Portfolio';
import Footerprofile from './Footerprofile';
import Footer from '../Home/Footer';
import '../main.scss';
const Profile = () => {
    return (
        <>
        <Navprofile />
        <Profpic />
        <Work />
        <Portfolio />
        <Footerprofile />
        <Footer />
        </>
    );
}

export default Profile;