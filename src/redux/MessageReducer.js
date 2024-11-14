const ADD_MESSAGE = "ADD-MESSAGE";
const EDIT_MESSAGE_TEXT = "EDIT-MESSAGE-TEXT";

const MessageReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                message: state.textMessage,
                direction: "to"
            };
            state.Message.push(newMessage);
            state.textMessage = "Start  message";
            return state;

        case EDIT_MESSAGE_TEXT:
            state.textMessage = action.text;
            return state;

        default:
            return state;
    }
}

export const addMessageDialogActionCreator = () => ({type: 'ADD-MESSAGE'})

export const onChangeDialogActionCreator = (text) => {
    return {type: 'EDIT-MESSAGE-TEXT', text: text}
}
export default MessageReducer;