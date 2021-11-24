// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 2 hr 54' 00 ''
import React, { useState } from 'react';

import data from './data';



function App() {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submiting form...');
  };
  

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-ipsum" onSubmit={handleSubmit} >
        <label htmlFor="amout">
          paragraphs:
        </label>
        <input type="number" name="amout" id="amount" />
      </form>
    </section>
    );
}



export default App;


