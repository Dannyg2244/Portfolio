//Demonstrating three ways image can be added to a React app
import danny from "./assets_images/danny.jpg"
function App() {
    const RandomImageUrl = "https//assets_images.com"
    return (
        <div>
            <h1>
                Task: Add three images with some styling
            </h1>
            <img
            height={200}
            src={danny}
            alt="An image of Daniel"
            />
            <img 
            height={200}
            src={require("./assets_images/danny.jpg")}
            alt="An image of Daniel"
            />
            <img 
            height={200}
            src={RandomImageUrl}
            alt="An image of Daniel"
            />
        </div>
    )
}

export default App