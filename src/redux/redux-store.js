import {combineReducers, legacy_createStore as createStore} from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import FriendsReducer from "./FriendsReducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    FriendsData: FriendsReducer,
});

let store = createStore(reducers);

export default store;