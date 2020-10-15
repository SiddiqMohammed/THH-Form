import React, { useState, useEffect } from 'react';
import {firebaseApp} from '../firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Contacts from './Contacts';

const ref = firebaseApp.firestore().collection('contacts');

const getSchools = () => {
  console.log('clyde')
  ref

    .onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(doc.data())
      });
      
    });
}
getSchools();
function SnapshotFirebaseAdvanced () {

  

  return (
    <div className="MainDiv">
      <div className="jumbotron text-center bg-sky">
          <h3>Registered List</h3>
      </div>
    
      <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Gender</th>
                    <th>Language</th>
                    <th>Emirates</th>
                    <th>Interested</th>
                </tr>
            </thead>
            <tbody>

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

export default SnapshotFirebaseAdvanced;