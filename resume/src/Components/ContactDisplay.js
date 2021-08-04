import React, {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();    
    emailjs.sendForm('service_fi4nrt9', 'template_mj79bul', e.target, 'user_5jEfd0WS0kUkcFl5z6GI4')
      .then((result) => {
          window.location.reload()   
      }, (error) => {
          console.log(error.text);
      });
}

function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  )
}

export default class ContactDisplay extends React.Component {


    render() {
        const val = 0;
        return(
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="html_message" />
            <input type="submit" value="Send" />
            </form>
            
        )
    }
}