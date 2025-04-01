import React from "react";
import module from "./DialogContent.module.css"
import {Navigate} from "react-router-dom";

function DialogContent(props) {
    let newMessageElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onChangeEvent = () => {
        let text = newMessageElement.current.value;
        props.onChangeEvent(text);
    }

    if (!props.isAuth)
        return <Navigate to={'/login'}/>;
    return (
        <div className={module.Content}>
            <div>
                {props.messages}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onChangeEvent}
                          value={props.newMessage} placeholder="Enter message"></textarea>
            </div>
            <div>
                <button onClick={addPost}>pOst</button>
            </div>
        </div>
    )
}

export default DialogContent;