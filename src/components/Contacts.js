import React, {useState} from 'react'
import '../App.css'
import { db } from '../firebase'
// import SnapshotFirebaseAdvanced from './ServiceFirebase'

function Contacts() {
    const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [currsalary, setCurrSalary] = useState("");
    const [exsalary, setExSalary] = useState("");
    const [notice, setNotice] = useState("");
    // const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('hiring').add({
            name: name,
            contact: contact,
            email: email,
            notice: notice,
            currsalary: currsalary,
            exsalary: exsalary,
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
        setCurrSalary("");
        setExSalary("");
        setNotice("");
        // setMessage("");
    }

    return (
        <div>
            {/* <SnapshotFirebaseAdvanced /> */}
        <form className="form" onSubmit={handleSubmit}>
            <h1>hiring form<span>.</span></h1>

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

            <label>Current Salary</label>
            <input 
            required
            placeholder=""
            value={currsalary}
            onChange={(e) => setCurrSalary(e.target.value)}
            />

            <label>Expected Salary</label>
            <input 
            required
            placeholder=""
            value={exsalary}
            onChange={(e) => setExSalary(e.target.value)}
            />

            <label>Notice Period</label>
            <input 
            required
            placeholder=""
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            />

            {/* <label>Are you interested in Part-Time Promoter and Event Roles?</label>
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
            No</label> */}

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

export default Contacts
