import React from "react";

function App(){
    const time = new Date()
    const day = time.toLocaleString("en-us", {weekday: "long"});
    const morning = time.getHours() >= 6  && time.getHours() <= 12;
    let dayMessage

    if (day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`
    }
    else if (day.toLowerCase() === "tuesday"){
        dayMessage = `${day} 4 days to go`
    }
    else if (day.toLowerCase() === "wednesday"){
        dayMessage = `${day} half way there`
    }
    else if (day.toLowerCase() === "thursday"){
        dayMessage = `${day} start planning the weekend`
    }
    else if (day.toLowerCase() === "friday"){
        dayMessage = `${day} woo, hoo, the weekend is coming`
    }
    else{
        dayMessage = `stay cool and keep having fun`
    }
    return (
        <div className="App">
            <h1>
                {dayMessage}
            </h1>
            {morning? <h2>have you had breakfast yet</h2> : ' '}
        </div>
    )
}

export default App