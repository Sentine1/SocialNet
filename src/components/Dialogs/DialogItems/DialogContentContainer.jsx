import React from "react";
import Items from "./DialogContentItems"
import DialogContent from "./DialogContent";
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/MessageReducer";

function DialogContentContainer(props) {
    
    let state = props.store.getState();
    let messages = state.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>);
    let addPost = () => {
        props.store.dispatch(addMessageDialogActionCreator())
    }

    let onChangeEvent = (text) => {
        let action = onChangeDialogActionCreator(text);
        props.store.dispatch(action)
    }

    return <DialogContent messages={messages} onChangeEvent = {onChangeEvent} addPost={addPost} newMessage = {state.messagePage.textMessage}/>;
}

export default DialogContentContainer;