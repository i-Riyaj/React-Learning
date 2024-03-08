import { useState } from 'react'
import './App.css'

// the state concept in React plays a crucial role in building dynamic and 
// interactive user interfaces by allowing components to manage and update 
// their data in response to various events and changes.
// useState() is a hook, stores the initial value of a variable
// setState() is a method which updates the state of a component
function App() {

// let counter = 15;
// insted of this 
const [counter, setCounter] = useState(15)
// counter:variable ; setCounter: method
// setCounter method updates counter variable
// whatever chnage happens in state, it's get rendered in the webpage

const addValue = () => {
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // in counter value it will not add 3, 
  // cause in every line we are calling same function

  // in case of the below code it will add 3
  // cause we are calling a method each time with the new counter value
  setCounter((counter)=>counter+1);
  setCounter((counter)=>counter+1);
  setCounter((counter)=>counter+1);
}

const removeValue = () => {
  //setCounter(counter - 1);

 if(counter >= 5){
   // i want to subtract 5 from the counter value
  // either
  // setCounter(counter - 5);

  // or
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
 }
}
  return (
    <>
     <h1>React Course with Hitesh {counter}</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}


// counting how many times an individual button is clicked
const MyButtonFunction = () => {
  const [count, setCount] = useState(0);
  
  const countClick = () => {
    setCount(count+1);
  }

  return (
    <button onClick={countClick}>clicked {count} times</button>
  )
  
}

const MyButton = () => {

  return (
    <>
    <MyButtonFunction />
    {" "}
    <MyButtonFunction />
     
    </>
  )
}

export default MyButton