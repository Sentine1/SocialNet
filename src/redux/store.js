import MessageReducer from "./MessageReducer";
import FriendsReducer from "./FriendsReducer";
import ProfileReducer from "./ProfileReducer";

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
            textMessage: '',
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
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        debugger;
        this._state.messagePage = MessageReducer(this._state.messagePage,action)
        this._state.profilePage = ProfileReducer(this._state.profilePage,action)
        this._state.FriendsData = FriendsReducer(this._state.FriendsData,action)
        
        this._callSubscriber(this._state);
        }
}

window.store = store;
export default store;