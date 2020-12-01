import React, { useState, useEffect } from 'react';
import '../assets/styles.css'

function Home(){

const [ipAdd, setIpAdd] = useState("");

function getIpAdd(event){
    setIpAdd = event.target.name;

}


    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        _body: JSON.stringify({ title: 'React Hooks POST Request Example' }),
        get body() {
            return this._body;
        },
        set body(value) {
            this._body = value;
        },
    };
    fetch('http://localhost:5000/result', requestOptions)
        .then(function (response) {
                return function(){
                    var res = response.json();
                    console.log(res);
                }
                
            })
        // .then(data => getIpAdd(data.ipAdd));

        
// empty dependency array means this effect will only run once (like componentDidMount in classes)




    return(
    <div className="overlay">
    <div className="contain">
        <h2 class="posn">Enter the Ip address</h2>
        <form action="http://localhost:5000/result" className="form-inline" method="POST">
          <i className="fas fa-search posn2" aria-hidden="true"></i>
          <input className="form-control form-control-sm ml-3 w-25 " type="text" name="ip" placeholder="Search"
            aria-label="Search" autocomplete="off" />
        </form>
    </div>    
    </div>
    )
}

export default Home;