import React, {useState} from 'react'
import '../app.css'
import { db } from '../firebase'

function Contacts() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("");
    // const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            gender: gender,
            contact: contact,
            email: email,
            language: language,
            // message: message
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
        setGender("");
        setContact("");
        setEmail("");
        setLanguage("");
        // setMessage("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>registration form<span>.</span></h1>

            <label>Name</label>
            <input 
            required
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label>Gender</label>
            <input 
            required
            placeholder=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            />

            <label>Contact Number</label>
            <input 
            required
            placeholder=""
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            />

            <label>Email</label>
            <input 
            required
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Language Spoken</label>
            <input 
            required
            placeholder=""
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            />

            
           

            {/* <label>Message</label>
            <textarea 
            placeholder=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea> */}

            <button type="submit" style={{ background: loader ? '#acc' : 'rgb(147, 213, 0)', color: 'rgb(53, 52, 54)' }}>Submit</button>
        </form>
    )
}

export default Contacts
