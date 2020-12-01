import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import '../assets/styles.css'

function Result(){

const [ipDetails, setIpDetails] = useState(null)
let { ip } = useParams()

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({"ip": ip})
};

if(!ipDetails) {
  fetch(`http://localhost:5000/result`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setIpDetails(data)
      });
}
  // useEffect(()=> {
  //   fetchData()
  // }, [])


    return(
    <div id="typed-strings">
    <p className="initial">$desktop/bin/temp/details:- loading...</p>
    <p >details: {JSON.stringify(ipDetails)}</p>
    
    <p>$status:- CLEARED ! Hit f5 to refresh!</p>
  </div>

    )
}

export default Result;