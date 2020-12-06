import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './Image';

function App() {
  const [num,setNum] = useState();
  const [name ,setName] = useState();
  const [move,setMove] = useState();
  const [img,setImg] = useState('');


  const change = (event) => {
    setNum(event.target.value);
  };

  useEffect(() => {
    async function get(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      
      // console.log(res);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }

    get();
  });

  const changeImage = (event) => {
    const e = event.target.value;
    setImg(e);
  }
  
  return (
    <div className="container">
      <h1>You have selected <span>{num}</span>  </h1>
      <h2>My name is <span>{name}</span> </h2>
      <h3>I have <span>{move}</span>  moves</h3>

      <select value={num} onChange={change}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input style={{display:"block", margin:"10px"}} type="text" placeholder="search" value={img} onChange={changeImage} />
      
      { img === "" ? null : <Image name={img}/> }
    </div>
  );
}

export default App;
