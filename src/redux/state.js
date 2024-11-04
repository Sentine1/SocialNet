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
            newPostText: "Add new post",
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
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            like: 1
        }
        this._state.profilePage.PostMessage.push(newPost);
        this._state.profilePage.newPostText = "Add new post";
        this._callSubscriber();
    },
    editText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber();
    },

    addMessage() {
        let newMessage = {
            message: this._state.messagePage.textMessage,
            direction: "to"
        };
        this._state.messagePage.Message.push(newMessage);
        this._state.messagePage.textMessage = "Start  message";
        this._callSubscriber();
    },

    editMessageText(text) {
        this._state.messagePage.textMessage = text;
        this._callSubscriber();
    },

    subscribe(observer) {
        this._state._callSubscriber = observer;
    },

}


window.store = store;
export default store;