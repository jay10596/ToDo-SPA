import React from "react";

function Form(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="topLine" value={props.data.topLine} onChange={props.handleChange} placeholder="Enter top line..." />
                <input type="text" name="bottomLine" value={props.data.bottomLine} onChange={props.handleChange} placeholder="Enter bottom line..." />

                <button>Make Meme</button>
            </form>
        </div>
    )
}

export default Form