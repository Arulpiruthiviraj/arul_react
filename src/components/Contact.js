import React,{useState} from 'react'
import axios from 'axios'
import transporter from "../config/config";

function Contact() {
    const initialFormState = { id: null, sender_name: '', sender_mail: '',sender_message:'' };
    const [message, setMessage] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setMessage({ ...message, [name]: value })
    };
    const handleSubmit = event =>{
        event.preventDefault();
        const mailOptions={
            from:"aprprasanth16@gmail.com",
            to:"maheshalpha01@gmail.com",
            subject:"test",
        };
        transporter.sendMail(mailOptions,function (err,res) {
            if (err){
                console.log("error")
            }
            else {
                console.log("email sent")
            }
        });
        setMessage(initialFormState)
    };


    return (
        <div style={{marginTop:60}}>
            <h1>Contact</h1>
            <form    onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control"  name="sender_name"  value={message.sender_name} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  name="sender_mail"  value={message.sender_mail} onChange={handleInputChange} required aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" name="sender_message" value={message.sender_message} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div>
                    { window.location.hash === '#success' &&
                    <div id="success">
                        <p>Your message has been sent!</p>
                    </div>
                    }
                    { window.location.hash === '#error' &&
                    <div id="error">
                        <p>An error occured while submitting the form.</p>
                    </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Contact
