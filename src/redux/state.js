const ADD_POST = "ADD-POST";
const EDIT_TEXT = "EDIT-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const EDIT_MESSAGE_TEXT = "EDIT-MESSAGE-TEXT";

let store = {
    _state: {
        messagePage: {
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
            textMessage: "Start  message",
        },
        profilePage: {
            PostMessage: [
                {message: "Test message 1", like: 40},
                {message: "Test message 2", like: 20},
                {message: "Test message 5", like: 40},
                {message: "Test message 3", like: 60}],
            newPostText: '',
        },
        FriendsData: {
            Friends: [
                {name: "Person one", ava: "ava1.png"},
                {name: "Person two", ava: "ava2.png"},
                {name: "Person three", ava: "ava3.png"},
                {name: "Person four", ava: "ava4.png"},
                {name: "Person n", ava: "avan.png"}
            ],
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    },
    
    dispatch(action){
        if(action.type === ADD_POST)  {
            let newPost = {
                message: this._state.profilePage.newPostText,
                like: 1
            }
            this._state.profilePage.PostMessage.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if(action.type === EDIT_TEXT)  {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
        else if(action.type === ADD_MESSAGE)  {
            let newMessage = {
                message: this._state.messagePage.textMessage,
                direction: "to"
            };
            this._state.messagePage.Message.push(newMessage);
            this._state.messagePage.textMessage = "Start  message";
            this._callSubscriber(this._state);
        }
        else if(action.type === EDIT_MESSAGE_TEXT)  {
            this._state.messagePage.textMessage = action.text;
            this._callSubscriber(this._state);
        }
    },
}

export const addMessageDialogActionCreator = () => ({type:'ADD-MESSAGE'})

export const onChangeDialogActionCreator = (text) => {
    return {type:'EDIT-MESSAGE-TEXT', text:text}
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const onChangeActionCreator = (text) => {
    return {type: 'EDIT-TEXT', text: text};
}

window.store = store;
export default store;