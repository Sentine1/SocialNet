import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onChangeEvent = () => {
        props.editText(newPostElement.current.value);
    }

    return <div className={module.Content}>
        <div>
            <div>
                <textarea onChange={onChangeEvent} ref={newPostElement}
                          value={props.profilePage.newPostText}/>
                <div/>
                <div>
                    <button onClick={addPost}>Save</button>
                    <button onClick={() => {
                        alert('Damn!!')
                    }}>Delete
                    </button>
                </div>
                {props.profilePage.PostMessage.map(e => (<Post message={e.message} like={e.like}/>))}
            </div>
        </div>
    </div>
}

export default SelfPosts;