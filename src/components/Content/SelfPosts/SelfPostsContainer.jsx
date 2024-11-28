import React from 'react';
import {addPostActionCreator, onChangeActionCreator} from "../../../redux/ProfileReducer";
import SelfPosts from "./SelfPosts";

const SelfPostsContainer = (props) =>{
    let state = props.store.getState();
    let posts = state.profilePage.PostMessage;
    let newText  = state.profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangeEvent = (text) => {
        let action = onChangeActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <SelfPosts addPost={addPost} onChange={onChangeEvent} newPostText={newText} posts={posts}/>
    )
}

export default SelfPostsContainer;