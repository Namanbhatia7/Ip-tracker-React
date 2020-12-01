import React, { useState } from 'react';
import '../assets/styles.css'

function Home(){

const [ipAdd, setIpAdd] = useState("");



// // POST request using fetch inside useEffect React hook
// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     _body: JSON.stringify({ title: 'React Hooks POST Request Example' }),
//     get body() {
//         return this._body;
//     },
//     set body(value) {
//         this._body = value;
//     },
// };
// fetch('http://localhost:5000/result', requestOptions)
//     .then(function (response) {
//             return function(){
//                 var res = response.json();
//                 console.log(res);
//             }
            
//         })
//     // .then(data => getIpAdd(data.ipAdd));

        
// // empty dependency array means this effect will only run once (like componentDidMount in classes)




    return(
    <div className="overlay">
    <div className="contain">
        <h2 className="posn">Enter the Ip address</h2>
        <div className="form-inline">
          <i className="fas fa-search posn2" aria-hidden="true"></i>
          <input onChange={e => setIpAdd(e.target.value)} className="form-control form-control-sm ml-3 w-25 " type="text" name="ip" placeholder="Search"
            aria-label="Search" />
        <button onClick={() => window.location=`/result/${ipAdd}`}>Submit</button>
        </div>
    </div>    
    </div>
    )
}

export default Home;