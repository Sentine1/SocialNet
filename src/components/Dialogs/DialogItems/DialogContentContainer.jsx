import React from "react";
import Items from "./DialogContentItems"
import DialogContent from "./DialogContent";
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/MessageReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessage: state.messagePage.textMessage,
        messages: state.messagePage.Message.map(e => <Items message={e.message} direction={e.direction}/>),
        isAuth: state.auth.isAuth
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