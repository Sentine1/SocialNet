import {combineReducers, legacy_createStore as createStore} from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import FriendsReducer from "./FriendsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./Auth-Reducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    FriendsData: FriendsReducer,
    UsersData: UsersReducer,
    auth:AuthReducer
});

let store = createStore(reducers);

window.store = store;
export default store;