import React, {useState} from 'react'
import './ClientSurvey.css'
import { db } from '../firebase'

function ClientSurvey() {
    const [collab, setCollab] = useState("");
    const [rate, setRate] = useState("");
    const [handle, setHandle] = useState("");
    const [campaignrun, setCampaignrun] = useState("");
    const [prodquality, setProdquality] = useState("");
    const [flexible, setFlexible] = useState("");
    const [satisfied, setSatisfied] = useState("");
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [contact, setContact] = useState("");
    // const [email, setEmail] = useState("");
    // const [language, setLanguage] = useState("");
    // const [emirates, setEmirates] = useState("");
    // const [isMale, setIsMale] = useState("")
    // const [isFemale, setIsFemale] = useState("")
    // const [isInterested, setIsInterested] = useState("")
    // const [isNot, setIsNot] = useState("")
    

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('clientsurvey').add({
            collab: collab,
            rate: rate,
            handle: handle,
            campaignrun: campaignrun,
            prodquality: prodquality,
            flexible: flexible,
            satisfied: satisfied,
            message1: message1,
            message2: message2,
        })
        .then(() => {
            alert('Message has been submitted!')
            setLoader(false)
        })
        .catch(error => {
            alert(error.message)
            setLoader(false)
        })

    
        setCollab("");
        setRate("");
        setHandle("");
        setCampaignrun("");
        setProdquality("");
        setFlexible("");
        setSatisfied("");
        setMessage1("");
        setMessage2("");
    }

    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <h1>client survey form<span>.</span></h1>

            {/* <label>1. How did you find out about The Hanging House/ Where did you first hear about us?</label>
            <label>
            <input 
            type="checkbox"
            value="Male"
            style={{ marginRight: '10px' }}
            checked={isMale}
            onChange={(e) => setIsMale(e.target.value)} />
            Company Website</label>
            <label>
            <input 
            type="checkbox"
            value="Female"
            style={{  marginRight: '10px' }}
            checked={isFemale}
            onChange={(e) => {setIsFemale(e.target.value); setIsMale("")}} />
            Google Ads/Search</label>
            <label>
            <input 
            type="checkbox"
            value="Female"
            style={{ marginRight: '10px' }}
            checked={isFemale}
            onChange={(e) => {setIsFemale(e.target.value); setIsMale("")}} />
            Social Media</label>
            <label>
            <input 
            type="checkbox"
            value="Female"
            style={{ marginRight: '10px' }}
            checked={isFemale}
            onChange={(e) => {setIsFemale(e.target.value); setIsMale("")}} />
            Word of Mouth</label>
            <label>
            <input 
            type="checkbox"
            value="Female"
            style={{ marginBottom: '30px', marginRight: '10px' }}
            checked={isFemale}
            onChange={(e) => {setIsFemale(e.target.value); setIsMale("")}} />
            Emails</label> */}
            

            {/* <label>Gender</label>
            <input 
            required
            placeholder=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            /> */}

            <label>2. How long have you been collaborating with The Hanging House?</label>
            <select 
            required
            value={collab} 
            onChange={(e) => setCollab(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="1-3 months">1-3 months</option>
                <option value="4-6 month">4-6 months</option>
                <option value="7-12 months">7-12 months</option>
                <option value="Over a year">Over a year</option>
            </select>

            <label>3. Overall, how would you rate the activation?</label>
            <select 
            required
            value={rate} 
            onChange={(e) => setRate(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="Satisfied">Satisfied</option>
                <option value="Very satisfied">Very satisfied</option>
                <option value="Dissatisfied">Dissatisfied</option>
                <option value="Very dissatisfied">Very dissatisfied</option>
            </select>

            <label>4. How well did your Account Manager handle your project?</label>
            <select 
            required
            value={handle} 
            onChange={(e) => setHandle(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="Well">Well</option>
                <option value="Extremely well">Extremely well</option>
                <option value="Not so well">Not so well</option>
                <option value="Not at all well ">Not at all well</option>
            </select>

            <label>5. From an Operations point of view, did the production technical aspects of the campaign run smoothly? </label>
            <select 
            required
            value={campaignrun} 
            onChange={(e) => setCampaignrun(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="Yes, it went perfectly">Yes, it went perfectly</option>
                <option value="Yes, but there were some problems">Yes, but there were some problems</option>
                <option value="No, it didn’t go smoothly but there were Improvements">No, it didn’t go smoothly but there were Improvements</option>
                <option value="No, it went horribly altogether">No, it went horribly altogether</option>
            </select>

            <label>6. How would you rate the production quality of your campaign?   </label>
            <select 
            required
            value={prodquality} 
            onChange={(e) => setProdquality(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="High quality ">High quality </option>
                <option value="Very high quality ">Very high quality </option>
                <option value="Low quality">Low quality</option>
                <option value="Very low quality">Very low quality</option>
            </select>

            <label>7. How flexible was the The Hanging House team throughout the project? </label>
            <select 
            required
            value={flexible} 
            onChange={(e) => setFlexible(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="Flexible">Flexible</option>
                <option value="Very flexible">Very flexible</option>
                <option value="Somewhat flexible">Somewhat flexible</option>
                <option value="None at all">None at all</option>
            </select>

            <label>8. Overall, how satisfied were you with The Hanging House ’s services? </label>
            <select 
            required
            value={satisfied} 
            onChange={(e) => setSatisfied(e.target.value)}>
                <option value="">Please Select...</option>
                <option value="Satisfied">Satisfied</option>
                <option value="Very satisfied">Very satisfied</option>
                <option value="Neutral">Neutral</option>
                <option value="Not so satisfied">Not so satisfied</option>
                <option value="Not satisfied at all">Not satisfied at all</option>
            </select>

            <label>9. Do you have any suggestions and feedback you would like to share? Were there any concerns that you feel were overlooked?
            </label>
            <textarea 
            placeholder=""
            value={message1}
            onChange={(e) => setMessage1(e.target.value)}
            ></textarea>

            <label>10. Kindly write a few words as a testimonial below 
            </label>
            <textarea 
            placeholder=""
            value={message2}
            onChange={(e) => setMessage2(e.target.value)}
            ></textarea>

            <button type="submit" style={{ background: loader ? '#acc' : 'rgb(147, 213, 0)', color: 'rgb(53, 52, 54)' }}>Submit</button>
        </form>
        </div>
    )
}

export default ClientSurvey