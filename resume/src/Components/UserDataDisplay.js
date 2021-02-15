import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Image} from "semantic-ui-react";
import linkedInLogo from "../Constants/linkedIcon.png";
import gitLogo from "../Constants/gitHubIcon.png";
import instLogo from "../Constants/instagramIcon.jpg";

const CircularImage = (image, ref) => (
  <a href={ref}>
    <Image 
        className="icon"
        src={image}
    />
  </a>
)

export default class UserDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfoArr: this.props.userInfoArr,
        tabTitle: "",
        tabText: "",
    };
    console.log("This is Tab data")
    console.log(this.state)
  }

  render() {
      return (
        <div className="tabs">
          <Tabs>
            <Tab eventKey="About Me" title="About Me">
                <div className="tableTab">
                  <div className="leftPar">
                    <h3>Personally</h3>
                    <p>
                      Hello! If you're reading this then it means your likely considering hiring me 
                      and want to know a little more about me. Well look no further you have arrived 
                      at the "About Me" section. If I had to say anything about my self it's that I 
                      am an awesome team member, and no I'm not just saying that because companies value
                      team players. I am genuinely a pleasant person to be around and a hard worker. 
                      Don't believe me fine. You'll just have to hire me and see. Apart from my great 
                      personality, I am also pretty funny. So if for anythin just hire me based on that.
                      It'll boost office moral you know? Now on a more serious note, I think I should tell
                      you before you hire me. I am pretty awesome and may unintentionally steal your  
                      thunder. You have been warned. (ps. I am just kidding I am pretty shy in real life)
                    </p>
                  </div>
                  <div className="rightPar">
                    <h3>Professionally</h3>
                    <p>
                      Currently an IT Support Technician ll with extensive knowledge in networking, web development and 
                      machine learning. I'm curretly employeed in an amazon fulfillment facility where I help associates
                      on a daily bases with all kinds of problems. This includes troubleshooting printers, laptops,
                      desktops, thinclients, scanners and a variety of other equipment. I have been  with amazon 
                      for about three years now. Attempting to clime the corporate latter. I would like to eventually become
                      one of Amazon's software Engineers and help them evolve what's already an awesome company. I'm building my
                      self from the ground up and getting all the neccessary skills to become not a good Engineer but a 
                      great one.   
                    </p>
                  </div>
                </div>
                <div className="mediaIcons">
                  {CircularImage(linkedInLogo, "https://linkedin.com/in/liliana-pacheco-b55524163")}
                  {CircularImage(gitLogo, "https://github.com/lilipach")}
                  {CircularImage(instLogo, "https://www.instagram.com/bluecheco/")}
                </div>
            </Tab>  
            <Tab eventKey="Education" title="Education">
              <div className="entry">
                <h3>University of Nevada Reno</h3>
                <h5>Bachelor's Degreen In Computer Science and Engineering | Spring 2020</h5>
                <p>1664 N Virginia St, Reno, NV 89557 – (775) 784-1110</p>
                <ul>
                  <li>
                    Minor: Mathematics and Cyber Security
                  </li>
                  <li>
                    GPA: 3.45
                  </li>
                </ul>
              </div>

              <div className="entry">
              <h3>Galena High School</h3>
              <h5>High School Diploma | Spring 2016</h5>
                <p>3600 Butch Cassidy Dr. Reno, NV 89511 – (775) 851-5630</p>
                <ul>
                  <li>
                    Completed High School advanced and Honers Diploma
                  </li>
                  <li>
                    Cummulative GPA: 4.5 
                  </li>
                </ul>
              </div>
            </Tab>
            <Tab eventKey="Skills" title="Skills">
              <p>hello this is me</p>
            </Tab>
            <Tab eventKey="Experience" title="Experience">
              <p></p>
            </Tab>
            <Tab eventKey="Projects" title="Projects">
              <p>hello this is me</p>
            </Tab>
          </Tabs>
        </div>
      );
    }
}
 