import React from "react";
import module from "./DialogContent.module.css"

function DialogContent(props) {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text?text:"Null?")
    }
    return (
        <div className={module.Content}>
            <div>
                {props.MapMessage}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <button onClick={addMessage}>pOst</button>
        </div>
    )
}

export default DialogContent;