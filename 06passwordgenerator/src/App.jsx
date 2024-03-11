import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pass, setPass] = useState('');
  const [length, setLength] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  //useRef hook
  const passwordRef = useRef(null)
  const copyBtnRef = useRef(null)

  const copyPassWordToClipBoard = useCallback(() => {

    // select text and specify range
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8)

    //copy text to clipboard
    window.navigator.clipboard.writeText(pass);
  }, [pass])


  //useCallback hook
  const passwordGenerator = useCallback(()=>{

    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed === true) str += "0123456789";
    if(charAllowed === true) str += "!@#$%^&*";

    for(let i = 1; i <= length; i++){
      let strIndex = Math.floor(Math.random()* (str.length) + 1);
      password += str.charAt(strIndex);
    }
    setPass(password);
  }, [length, numAllowed, charAllowed, setPass])

  //useEffect hook
  useEffect(()=>{
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className="bg-slate-700 min-h-dvh max-w-dvw flex justify-center items-center md:text-xl">

      <div className="bg-slate-600 p-5 max-w-[600px] rounded-lg flex flex-col gap-3 items-left">

      <h1 className="text-white font-bold text-lg text-center">Password Generator</h1>
      
      <section className="w-full">

         <input type="text" 
         readOnly 
         className="p-2 rounded-l-lg w-4/5 max-sm:w-auto text-orange-500"
         value={pass}
         placeholder="password will appear here"
         ref={passwordRef}
         />

         <button className="bg-blue-700 p-2 rounded-r-lg"
         onClick={copyPassWordToClipBoard}
         >Copy</button>

      </section>

      <section className="text-orange-500 flex sm:justify-between max-sm:flex-col gap-8">

        <section>

        <input type="range" 
        name="setLengthOfPassword" 
        min={1} max={15} 
        onChange={(e)=>setLength(e.target.value)}
        />

        <label htmlFor="setLengthOfPassword">Length: {length}</label>

        </section>

        <section>

        <input type="checkbox" 
        id="includeNumbers" 
        className="cursor-pointer"
        defaultChecked={numAllowed}
        onChange={()=>{
          setNumAllowed((prev)=>!prev)
        }}
        />

        <label htmlFor="includeNumbers">Numbers</label>

        </section>

        <section>

        <input type="checkbox" 
        id="includeChar"
        className="cursor-pointer"
        defaultChecked={charAllowed}
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        />

        <label htmlFor="includeChar">Special Charecters</label>

        </section>

      </section>

      </div>
         
     </div>
    </>
  )
}


export default App
