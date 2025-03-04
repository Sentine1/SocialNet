const ADD_POST = "ADD-POST";
const EDIT_TEXT = "EDIT-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    PostMessage: [
        {id: 1, message: "Test message 1", like: 40},
        {id: 2, message: "Test message 2", like: 20},
        {id: 3, message: "Test message 5", like: 40},
        {id: 4, message: "Test message 3", like: 60}],
    newPostText: '',
    profile: null
};
const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                like: 1
            }
            return {
                ...state,
                PostMessage: [...state.PostMessage, newPost],
                newPostText: ""
            };
        }
        case EDIT_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const onChangeActionCreator = (text) => {
    return {type: EDIT_TEXT, text: text};
}

export default ProfileReducer;