const ADD_MESSAGE = "ADD-MESSAGE";
const EDIT_MESSAGE_TEXT = "EDIT-MESSAGE-TEXT";

let initialState = {
    PersonList: [
        {id: 1, name: 'person One'},
        {id: 2, name: 'Person two'},
        {id: 3, name: 'person Three'},
        {id: 4, name: 'person four'},
        {id: 5, name: 'person five'},
    ],
    Message: [
        {message: "Message one", direction: "from"},
        {message: "Answer one", direction: "to"},
        {message: "Message two", direction: "from"},
        {message: "Message Three", direction: "from"},
        {message: "Answer two", direction: "to"},
        {message: "Message Four", direction: "from"}
    ],
    textMessage: '',
};
const MessageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let stateCopy = {...state};
            let newMessage = {
                message: state.textMessage,
                direction: "to"
            };
            stateCopy.Message = [...state.Message]
            stateCopy.Message.push(newMessage);
            stateCopy.textMessage = "";
            return stateCopy;
        }

        case EDIT_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.textMessage = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageDialogActionCreator = () => ({type: 'ADD-MESSAGE'})

export const onChangeDialogActionCreator = (text) => {
    return {type: 'EDIT-MESSAGE-TEXT', text: text}
}
export default MessageReducer;