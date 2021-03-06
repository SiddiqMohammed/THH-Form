import React, {useState} from 'react'
import '../App.css'
import { db } from '../firebase'
// import SnapshotFirebaseAdvanced from './ServiceFirebase'

function Register() {
    const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("");
    const [emirates, setEmirates] = useState("");
    const [isMale, setIsMale] = useState("")
    const [isFemale, setIsFemale] = useState("")
    const [isInterested, setIsInterested] = useState("")
    const [isNot, setIsNot] = useState("")
    // const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('register').add({
            name: name,
            contact: contact,
            email: email,
            language: language,
            emirates: emirates,
            isMale: isMale,
            isFemale: isFemale,
            isInterested: isInterested,
            isNot: isNot,
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
        setIsInterested("");
        setIsNot("");
        // setMessage("");
    }

    return (
        <div>
        {/* <SnapshotFirebaseAdvanced />     */}
        <form className="form" onSubmit={handleSubmit}>
            <h1>registration form<span>.</span></h1>

            <label>Name</label>
            <input 
            required
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

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
            type="number"
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
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Ajman">Ajman</option>
                <option value="Dubai">Dubai</option>
                <option value="Fujairah">Fujairah</option>
                <option value="Ras Alkhaimah">Ras Al-Khaimah</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Umm Al Quwain">Umm Al-Quwain</option>
            </select>

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

            <label>Are you interested in Part-Time Promoter and Event Roles?</label>
            <label>
            <input 
            type="radio"
            value="Yes"
            style={{ marginRight: '10px' }}
            checked={isInterested}
            onChange={(e) => {setIsInterested(e.target.value); setIsNot("")}} />
            Yes, I'm Interested</label>
            <label>
            <input 
            type="radio"
            value="No"
            style={{ marginBottom: '30px', marginRight: '10px' }}
            checked={isNot}
            onChange={(e) => {setIsNot(e.target.value); setIsInterested("")}} />
            No</label>

            {/* <label>Message</label>
            <textarea 
            placeholder=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea> */}

            <button type="submit" style={{ background: loader ? '#acc' : 'rgb(147, 213, 0)', color: 'rgb(53, 52, 54)' }}>Submit</button>
        </form>
        </div>
    )
}

export default Register
