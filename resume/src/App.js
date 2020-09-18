import React from 'react';
import './App.css';
import HeaderDisplay from "./Components/HeaderDisplay";
import TabDisplay from "./Components/TabDisplay";
import ContactDisplay from "./Components/ContactDisplay";
import userImage from "./Constants/profilePic.png";
import {NavBar} from "./Components/NavBar";

export default class App extends React.Component{
  render() {
      return (
          <div className="App">
              <div className="background"/>
              <NavBar/>
              <div className="content">
                  <HeaderDisplay image = {userImage}
                                 titleName = {"Liliana Pacheco"}
                                 subTitle = {"Graduate Student"}
                  />
                  <TabDisplay/>
                  <ContactDisplay/>
              </div>
          </div>
      );
  }
}
