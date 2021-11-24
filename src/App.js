// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 02' 00 ''
import React, { useState } from 'react';

import data from './data';



function App() {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(data.length);
    
    console.log(typeof count);
    let amount = parseInt(count);
 
    if (amount >= data.length) {
      amount = data.length;
    } 
    
    if (amount <= 0) {
      amount = 1;
    } 
    
    setText(data.slice(0, amount));
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


