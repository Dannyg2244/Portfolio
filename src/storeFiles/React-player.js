import React from "react"
import ReactPlayer from "react-player"

function App() {
    const vidurl = 
    return (
        <div>
            <h1>React Player Example</h1>
            <ReactPlayer 
            url={vidurl}
            playing={false}
            volume={0.5}/>
        </div>
    )
}
export default App