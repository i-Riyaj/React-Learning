import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Card     userName = "Hinata Hyuga" 
    emailID= "hinata@gmail.com"
    isLoggedIn= "true"
    usedFor= "9"
    userID= "@itsHinata_"
    imageUrl= "https://easydrawingguides.com/wp-content/uploads/2021/11/how-to-draw-hinata-hyuga-from-naruto-featured-image-1200-1.png"
    age= "23"
    country= "Japan"
    city= "Hidden Leaf" />


  </React.StrictMode>,
)
