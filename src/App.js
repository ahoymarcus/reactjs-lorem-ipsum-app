// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 02' 00 ''
import React, { useState } from 'react';

import data from './data';



function App() {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Submiting form...');
    //console.log(count);
    console.log(data.length);
    
    let newText = [];
    if (count >= data.length) {
      newText = data.slice();
    } else if (count < 0) {
      newText = data.slice(0, 1);
    } else {
      newText = data.slice(0, count)
      console.log('newText ', newText);
    }
    
    setText(newText);
  };
  

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-ipsum" onSubmit={handleSubmit} >
        <label htmlFor="amout">
          paragraphs:
        </label>
        <input 
          type="number" 
          name="amout" 
          id="amount" 
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>
          })
        }

      </article>
    </section>
    );
}



export default App;


