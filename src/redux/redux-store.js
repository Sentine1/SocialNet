import {combineReducers, legacy_createStore as createStore} from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import FriendsReducer from "./FriendsReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    FriendsData: FriendsReducer,
    UsersData: UsersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;