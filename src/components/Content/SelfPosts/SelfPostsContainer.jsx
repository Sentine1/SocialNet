import React from 'react';
import {addPostActionCreator, onChangeActionCreator} from "../../../redux/ProfileReducer";
import SelfPosts from "./SelfPosts";
import {connect} from "react-redux";

// const oldSelfPostsContainer = (props) => {
//     let state = props.store.getState();
//     let posts = state.profilePage.PostMessage;
//     let newText = state.profilePage.newPostText;
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     let onChangeEvent = (text) => {
//         let action = onChangeActionCreator(text);
//         props.store.dispatch(action)
//     }
//
//     return (
//         <SelfPosts addPost={addPost} onChangeEvent={onChangeEvent} newPostText={newText} posts={posts}/>
//     )
// }

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