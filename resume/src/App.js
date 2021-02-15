import React from 'react';
import './App.css';
import HeaderDisplay from "./Components/HeaderDisplay";
import UserDataDisplay from "./Components/UserDataDisplay"
import ContactDisplay from "./Components/ContactDisplay";
import userImage from "./Constants/profilePic.png";
import {NavBar} from "./Components/NavBar";

export default class App extends React.Component{

  render() {
     var userInfo =[
                    {
                        title: "About Me",
                        text: "Hi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say hereHi I'm Liliana Pacheco. Something interesting to say here"
                    },
                    
                    {
                        title: "Experience",
                        text: "I don't actually know anything but please hire me"
                    },
                    
                    {
                        title: "Education",
                        text: "Science in Potato engineering"
                    },
                    
                    {
                        title: "Skills",
                        text: "perfect breathing most of the time..."
                    },

                    {
                        title: "Projects",
                        text: "I'm too embarassed to show any"
                    },
                  ];


        return (
            <div className="App">
                <div className="background"></div>
                <div className="content">
                    <NavBar/>
                    <div className="user">
                        <HeaderDisplay
                            image = {userImage}
                            titleName = {"Liliana Pacheco"}
                            subTitle = {"Software Engineer"}
                        />

                        <UserDataDisplay userInfoArr = {userInfo}/>

                        <div className="contactContainer">
                            <ContactDisplay/>
                        </div>
                    </div>
                </div>
            </div>     
      );
  }
}
