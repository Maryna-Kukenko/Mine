import React, {Component} from 'react'

import './style.css'
import MyPhoto from "./components/MyPhoto/";
import AboutMe from "./components/AboutMe/";
import MyDetails from "./components/MyDetails/";

class Profile extends Component {
  render() {
    return (
      <div className='main-profile'>
        <h1 className='profile-title'>Profile</h1>
        <MyPhoto/>
        <MyDetails/>
        <AboutMe/>
      </div>
    )
  }
}

export default Profile