import React from "react";
import Items from "./DialogContentItems"
import DialogContent from "./DialogContent";
import {addMessageDialogActionCreator, onChangeDialogActionCreator} from "../../../redux/MessageReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(DialogContent);

const DialogContentContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogContentContainer;