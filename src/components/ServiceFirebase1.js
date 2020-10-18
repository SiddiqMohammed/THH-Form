import React, { useState, useEffect } from 'react';
import {firebaseApp} from '../firebase';

import 'bootstrap/dist/css/bootstrap.min.css';


function UseTimes() {
  const [times, setTimes] = useState([])

  useEffect(() => {
    firebaseApp
      .firestore()
      .collection('hiring')
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setTimes(newTimes)
      })
  }, [])

  return times
    
}


function SnapshotFirebaseAdvanced1 () {

  const times = UseTimes()

  return (
    <div className="MainDiv">
      <div className="jumbotron text-center bg-sky">
          <h3>Registered Applicants</h3>
      </div>
    
      <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Current Salary</th>
                    <th>Expected Salary</th>
                    <th>Notice Period</th>
                </tr>
            </thead>
            <tbody>
            {times.map((time) => 
              <tr key={time.id}>     
              <td>{time.name}</td>
              <td>{time.email}</td>
              <td>{time.contact}</td>
              <td>{time.currsalary}</td>
              <td>{time.exsalary}</td>
              <td>{time.notice}</td>

              </tr>
            )}
            {/* {this.state.items.map(data => {
                
                return (
                    <tr>     
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.isMale}</td>
                    <td>{data.language}</td>
                    <td>{data.emirates}</td>
                    <td>{data.isInterested}</td>

                    </tr>
                    
                );
               
            })} */}
               

               
            </tbody>
            
         </table>
          
     </div>
    </div>

      
  );
}

export default SnapshotFirebaseAdvanced1;