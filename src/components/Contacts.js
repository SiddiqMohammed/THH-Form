import React, {useState} from 'react'
import '../app.css'
import { db } from '../firebase'

function Contacts() {
    const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("");
    const [emirates, setEmirates] = useState("");
    const [isMale, setIsMale] = useState("")
    const [isFemale, setIsFemale] = useState("")
    // const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            // gender: gender,
            contact: contact,
            email: email,
            language: language,
            emirates: emirates,
            isMale: isMale,
            isFemale: isFemale,
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
        // setGender("");
        setContact("");
        setEmail("");
        setLanguage("");
        setEmirates("");
        setIsMale("");
        setIsFemale("");
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
            <label>
            <input 
            type="radio"
            value="Male"
            style={{ marginRight: '10px' }}
            checked={isMale}
            onChange={(e) => {setIsMale(e.target.value); setIsFemale("")}} />
            Male</label>
            <label>
            <input 
            type="radio"
            value="Female"
            style={{ marginBottom: '30px', marginRight: '10px' }}
            checked={isFemale}
            onChange={(e) => {setIsFemale(e.target.value); setIsMale("")}} />
            Female</label>

            {/* <label>Gender</label>
            <input 
            required
            placeholder=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            /> */}

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

            <label>Emirates</label>
            <select 
            required
            value={emirates} 
            onChange={(e) => setEmirates(e.target.value)}>
                <option value="apple">Abu Dhabi</option>
                <option value="orange">Ajman</option>
                <option value="dubai">Dubai</option>
                <option value="fujairah">Fujairah</option>
                <option value="rasalkhaimah">Ras Al-Khaimah</option>
                <option value="sharjah">Sharjah</option>
                <option value="ummalquwain">Umm Al-Quwain</option>
            </select>

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
