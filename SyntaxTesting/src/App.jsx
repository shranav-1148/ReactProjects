import './App.css'
import { useState } from 'react';


/**
 * A basic Button React object
 * Created for Syntax Practice and Understanding 
 * @returns MyButton object
 */
function MyButton({ count, onClick }){
  /**
   * If we want to count separately uncomment this and remove the arguments
   */


  // const [count, setCount] = useState(0);

  // function handleClick(){
  //   setCount(count+1);
  // }

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
  /**
   * This is for when count is updated on both buttons regardless of which we click
   * If for counting separately, comment the useState, handleClick code out and in the MyButton
   * HTML tags remove count and onClick, since we won't need to pass them from the App
   */
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <h1>Counters Using UseState</h1>
      <MyButton count = {count} onClick={handleClick} />
      <MyButton count = {count} onClick={handleClick} />
      

    </div>
  );
  
}

export default App
