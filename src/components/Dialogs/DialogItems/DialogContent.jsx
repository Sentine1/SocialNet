import React from "react";
import module from "./DialogContent.module.css"

function DialogContent(props) {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        clearText();
    }

    let clearText = () => {
        props.editMessageText("");
    }

    let onChangeEvent = () => {
        props.editMessageText(newMessageElement.current.value);
    }
    
    return (
        <div className={module.Content}>
            <div>
                {props.messagePage.MapMessage}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onChangeEvent} onClick={clearText} value={props.messagePage.textMessage}></textarea>
            </div>
            <button onClick={addMessage}>pOst</button>
        </div>
    )
}

export default DialogContent;