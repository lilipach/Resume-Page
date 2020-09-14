import {Image} from "semantic-ui-react";
import React from "react";
import userImage from "../Images/profilePic.png";
import "../App.css"

const CircularImage = (image) => (
    <Image className="image"
        src={image}
    />
)

export default class HeaderDisplay extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
           image: props.image,
           titleName: props.titleName,
           subTitle: props.subTitle,
       }
   }

   static defaultProps = {
       image: userImage,
       titleName: "Empty",
       subTitle: "Empty",
   }

    render() {
       return(
           <div className='heading'>
               <h1 className='tittleName'> {this.state.titleName} </h1>
               <h2 className= 'subTittle'>  {this.state.subTitle} </h2>
               {CircularImage(this.props.image)}
           </div>
       )
    }
}


