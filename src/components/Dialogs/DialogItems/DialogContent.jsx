import React from "react";
import module from "./DialogContent.module.css"
import Items from "./DialogContentItems"

function DialogContent(props) {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type:'ADD-MESSAGE'});
    }

    let onChangeEvent = () => {
        let action = {type:'EDIT-MESSAGE-TEXT', text:newMessageElement.current.value}
        props.dispatch(action);
    }    

    let messages = props.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>);    

    return (
        <div className={module.Content}>
            <div>
                {messages}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onChangeEvent} value={props.messagePage.textMessage}></textarea>
            </div>
            <button onClick={addMessage}>pOst</button>
        </div>
    )
}

export default DialogContent;