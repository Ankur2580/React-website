import React from 'react';

import Signup2 from './Signup/Signup2';
import Login from './Login/Login';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Event from './Event/Event';
import Aboutevent from './Aboutevent/Aboutevent';
import Eventreg from './Eventreg/Eventreg';
import Explore from './Explore/Explore'
import Userprofile from './Userprofile/Userprofile'
import {Switch ,Route} from 'react-router-dom';
const Main = () => {
    return (
        <>
         
     
<Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/Login" component={Login} />
   <Route exact path="/Signup" component={Signup2} />
   <Route exact path="/Profile" component={Profile} />
   <Route exact path="/Event" component={Event} />
   <Route exact path="/Aboutevent" component={Aboutevent} />
   <Route exact path="/Eventreg" component={Eventreg} />
   <Route exact path="/Explore" component={Explore} />
   <Route exact path="/Userprofile" component={Userprofile} />
</Switch>
           
        </>
    );
}


export default Main;
