import React from "react";
import Items from "./DialogContentItems"
import DialogContent from "./DialogContent";
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/MessageReducer";
import {connect} from "react-redux";

// function OldDialogContentContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let messages = state.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>);
//                 let addPost = () => {
//                     store.dispatch(addMessageDialogActionCreator())
//                 }
//
//                 let onChangeEvent = (text) => {
//                     let action = onChangeDialogActionCreator(text);
//                     store.dispatch(action)
//                 }
//                 return <DialogContent
//                     messages={messages}
//                     onChangeEvent={onChangeEvent}
//                     addPost={addPost}
//                     newMessage={state.messagePage.textMessage}/>
//             }}
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        newMessage: state.messagePage.textMessage,
        messages: state.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEvent: (text) => {
            let action = onChangeDialogActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addMessageDialogActionCreator())
        }
    }
};

const DialogContentContainer = connect(mapStateToProps, mapDispatchToProps)(DialogContent);
export default DialogContentContainer;