import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//bgChanger app
function App() {
  let [color, setColor] = useState('#212121');

  const changeColor = (e)=>{
    setColor(color = e.target.textContent)
  }

  return (
   <div className="w-full h-dvh duration-200" style={{backgroundColor:color}}>

    <div className="fixed bottom-5 flex flex-wrap justify-center inset-x-0 px-2">

      <div className="flex flex-wrap justify-content gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-500">Green</button>

        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500">Red</button>

        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg text-black ">White</button>

        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-700">Blue</button>

        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500 text-black">Pink</button>
        
        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 text-black">Orange</button>
        
        <button onClick={changeColor} className="outline-none px-4 py-1 rounded-full shadow-lg bg-slate-500 text-black">Grey</button>

      </div>

    </div>

   </div>
  )
}

export default App
