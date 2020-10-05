import React, {Component, useState, useEffect, useRef} from 'react';


function App(){
    const [datas, setDatas] = useState();


  const filmList = () => {
      console.log('click');
        //fetch('https://elise.cda1.simplon-roanne.com:8443/movies?page=1', {method : 'GET',mode : 'cors',headers : { 'Content-Type':'application/json' , 'Accept':'*/*'}})
        //.then(res => res.json())
        //.then(response => this.setState({datas : response["hydra:member"]}))
    }

  
    return (
        
        <div>
            <button onClick={filmList}>Click me</button>
            <ul>
                
            </ul>
        </div>
    );
  

}

export default App;
