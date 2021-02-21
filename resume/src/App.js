import React from 'react';
import './App.css';
import HeaderDisplay from "./Components/HeaderDisplay";
import UserDataDisplay from "./Components/UserDataDisplay"
import ContactDisplay from "./Components/ContactDisplay";
import userImage from "./Constants/profilePic.png";
import {NavBar} from "./Components/NavBar";

export default class App extends React.Component{

    render() {
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

                        <UserDataDisplay/>

                        <div className="contactContainer">
                            <ContactDisplay/>
                        </div>
                    </div>
                </div>
            </div>     
      );
    }
}
