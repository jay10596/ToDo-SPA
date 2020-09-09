import React from "react";
import "./App.css"
import Todos from "./components/Todos/Todos";
import Meme from "./components/Meme/Meme";

function App() {
    return(
        <div className="App">
            <header>To-Do & Meme App</header>

            <div className="split-screen">
                <Todos />
                <Meme />
            </div>

            <footer><p className="footer-border">by Jay Modi</p></footer>
        </div>
    )
}

export default App