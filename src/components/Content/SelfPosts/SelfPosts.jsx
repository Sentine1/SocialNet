import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onChangeActionCreator, onChangeDialogActionCreator} from "../../../redux/state";

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }
    
    let onChangeEvent = (e) => {
        let text =e.target.value;
        let action = onChangeActionCreator(text);
        props.dispatch(action)
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
                {props.PostMessage.map(e => (<Post message={e.message} like={e.like}/>))}
            </div>
        </div>
    </div>
}

export default SelfPosts;