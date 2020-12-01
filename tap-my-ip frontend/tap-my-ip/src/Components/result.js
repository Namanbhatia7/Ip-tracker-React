import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles.css'

function Result(){

const [ipdetails, setDetails] = useState([]);

   
    // fetch("http://localhost:5000/result",{
    //     headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }

    // })
    //     .then((response) => response.json())
    //     .then((data) => setDetails(JSON.stringify(data)));       


    const fetchData = async () => {
        const result = await axios(
          'http://localhost:5000/result',
        );
        setDetails(result.data);
    }
        fetchData();
     


console.log(ipdetails);


    return(
        <div id="typed-strings">
    <p className="initial">$desktop/bin/temp/details:- loading...</p>
    <p >details: {ipdetails}</p>
    
    <p>$status:- CLEARED ! Hit f5 to refresh!</p>
  </div>

    )
}

export default Result;