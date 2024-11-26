import React from 'react';
import {addPostActionCreator, onChangeActionCreator} from "../../../redux/ProfileReducer";
import SelfPosts from "./SelfPosts";
import Post from "./Post/Post";

function SelfPostsContainer(props) {
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangeEvent = (e) => {
        let text = e.target.value;
        let action = onChangeActionCreator(text);
        props.dispatch(action)
    }

    let newPostText = props._state.profilePage.newPostText;

    let propsMessage = props._state.profilePage.PostMessage.map(e => (<Post message={e.message} like={e.like}/>));

    return (
        <SelfPosts addPost={addPost} onChange={onChangeEvent} newPostText={newPostText} propsMessage={propsMessage}/>
    )
}