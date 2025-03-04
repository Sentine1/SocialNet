import {addPostActionCreator, onChangeActionCreator} from "../../../redux/ProfileReducer";
import SelfPosts from "./SelfPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.PostMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangeEvent: (text) => {
            let action = onChangeActionCreator(text);
            dispatch(action)
        }
    }
};

const SelfPostsContainer = connect(mapStateToProps, mapDispatchToProps)(SelfPosts);
export default SelfPostsContainer;