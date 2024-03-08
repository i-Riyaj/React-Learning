import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const AnchorTag = (
    <a href="https://google.com/search?q=codi vore" target="_main">Click Me!</a>
)

const createAchorTag = React.createElement(
    'a',
    {href:'https://google.com/search?q=hiteshchoudhury', target:'_blank'},
    'ClickMe!'
)

function MyName(){
    return (
        <h2>My name: Riyaj Mondal {createAchorTag}</h2>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <MyName/>

)
