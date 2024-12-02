import React from "react";
import Items from "./DialogContentItems"
import DialogContent from "./DialogContent";
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/MessageReducer";
import StoreContext from "../../../StoreContext";

function DialogContentContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let messages = state.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>);
                let addPost = () => {
                    store.dispatch(addMessageDialogActionCreator())
                }

                let onChangeEvent = (text) => {
                    let action = onChangeDialogActionCreator(text);
                    store.dispatch(action)
                }
                return <DialogContent
                    messages={messages}
                    onChangeEvent={onChangeEvent}
                    addPost={addPost}
                    newMessage={state.messagePage.textMessage}/>
            }}
        </StoreContext.Consumer>
    );
}

export default DialogContentContainer;