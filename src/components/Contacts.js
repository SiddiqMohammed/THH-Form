import React, {useState} from 'react'
import '../app.css'
import { db } from '../firebase'

function Contacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert('Message has been submitted!')
            setLoader(false)
        })
        .catch(error => {
            alert(error.message)
            setLoader(false)
        })

    
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Form 📲</h1>

            <label>Name</label>
            <input 
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input 
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea 
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" style={{ background: loader ? '#acc' : 'rgb(2, 2, 110)' }}>Submit</button>
        </form>
    )
}

export default Contacts
