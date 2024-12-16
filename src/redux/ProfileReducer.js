const ADD_POST = "ADD-POST";
const EDIT_TEXT = "EDIT-TEXT";

let initialState = {
    PostMessage: [
        {message: "Test message 1", like: 40},
        {message: "Test message 2", like: 20},
        {message: "Test message 5", like: 40},
        {message: "Test message 3", like: 60}],
    newPostText: '',
};
const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                like: 1
            }
            let stateCopy = {...state};
            stateCopy.PostMessage = [...state.PostMessage];
            stateCopy.PostMessage.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case EDIT_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onChangeActionCreator = (text) => {
    return {type: EDIT_TEXT, text: text};
}

export default ProfileReducer;