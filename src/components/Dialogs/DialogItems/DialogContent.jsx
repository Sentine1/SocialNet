import React from "react";
import module from "./DialogContent.module.css"
import Items from "./DialogContentItems"
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/state";

function DialogContent(props) {
    let newMessageElement = React.createRef();
    let messages = props.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>);
    let addPost = () => {
        props.dispatch(addMessageDialogActionCreator())
    }

    let onChangeEvent = () => {
        let text = newMessageElement.current.value;
        let action = onChangeDialogActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={module.Content}>
            <div>
                {messages}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onChangeEvent}
                          value={props.messagePage.textMessage}></textarea>
            </div>
            <div>
                <button onClick={addPost}>pOst</button>
            </div>
        </div>
    )
}

export default DialogContent;