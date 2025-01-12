import './App.css'
import { useState } from 'react';


/**
 * A basic Button React object
 * Created for Syntax Practice and Understanding 
 * @returns MyButton object
 */
function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
  

  return (
    <div>
      <h1>Counters Using UseState</h1>
      <MyButton />
      <MyButton />

    </div>
  );
  
}

export default App
