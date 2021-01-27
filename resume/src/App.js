import React from 'react';
import './App.css';
import HeaderDisplay from "./Components/HeaderDisplay";
import TabDisplay from "./Components/TabDisplay";
import ContactDisplay from "./Components/ContactDisplay";
import userImage from "./Constants/profilePic.png";
import {NavBar} from "./Components/NavBar";

export default class App extends React.Component{

  render() {
      var carouselInfo = {
            tabs:[
                {
                    tab: {
                        tittle: "About Me",
                        text: "Hi I'm Liliana Pacheco. Something interesting to say here"
                    }
                },
                {
                    tab: {
                        tittle: "Experience",
                        text: "I don't actually know anything but please hire me"
                    }
                },
                {
                    tab: {
                        tittle: "Education",
                        text: "Science in Potato engineering"
                    }
                },
                {
                    tab: {
                        tittle: "Skills",
                        text: "perfect breathing most of the time..."
                    }
                },

            ]
      };


      return (
          <div className="App">
              <div className="background"/>
              <NavBar/>

              <div className="content">

                  <div className= "heading">
                      <HeaderDisplay
                           image = {userImage}
                           titleName = {"Liliana Pacheco"}
                           subTitle = {"Software Engineer"}
                      />
                  </div>

                  <div className="horizontalDisplay">
                      <TabDisplay
                            displayData = {carouselInfo}
                      /*user information*/
                      />

                      <ContactDisplay
                      /*Send me an email thing + Contact information*/
                      />
                  </div>
              </div>

          </div>
      );
  }
}
