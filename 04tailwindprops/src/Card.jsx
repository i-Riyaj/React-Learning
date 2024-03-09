import React from 'react'


//smart card
const Card = ({
    userName = "Unknown", 
    emailID= "Unknown",
    isLoggedIn= "false",
    usedFor= 0,
    userID= "not assigned",
    imageUrl= "optional",
    age= "Unknown",
    country= "Unknown",
    city= "Unknown"
}) => {
    return (
        <div className="flex max-sm:flex-col justify-center items-center gap-3 text-yellow-300 hover:text-white hover:bg-slate-700 hover:rounded-md hover:p-3 w-[700px] text-2xl bg-slate-900 rounded-2xl p-2">

            <div className="grid place-items-center">
                <img src={imageUrl} alt={imageUrl} className="h-[152px] rounded-full shadow-lg" />
            </div>

            <div >
                <h2 >{userName} - userID: {userID} - Online: {isLoggedIn}</h2>
                <i >email: {emailID}</i>
                <ul>
                    <li>Age: {age}</li>
                    <dl>
                        <dt>Country: {country}</dt>
                        <dd>City: {city}</dd>
                    </dl>
                    <li>using this platform since last {usedFor} months</li>
                </ul>
            </div>

        </div>
    )
}

export default Card;