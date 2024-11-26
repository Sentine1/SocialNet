import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onChangeActionCreator} from "../../../redux/ProfileReducer";

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.addPost();
    }
    
    let onChangeEvent = (e) => {
        props.onChange(e);
    }
    
    let postMessage = () => {
        props.PostMessage();
    }

    return <div className={module.Content}>
        <div>
            <div>
                <textarea onChange={onChangeEvent} ref={newPostElement}
                          value={props.newPostText} placeholder="New post"/>
                <div/>
                <div>
                    <button onClick={addPost}>Save</button>
                    <button onClick={() => {
                        alert('Damn!!')
                    }}>Delete
                    </button>
                </div>
                {postMessage}
            </div>
        </div>
    </div>
}

export default SelfPosts;