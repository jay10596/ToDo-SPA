import React from "react";
import '../Meme.css'

function Display(props) {
    return(
        <div>
            <p className="top-text">{props.data.topLine}</p>

            <img src={props.data.meme} onClick={props.fetchImage} />

            <p className="bottom-text">{props.data.bottomLine}</p>
        </div>
    )
}

export default Display