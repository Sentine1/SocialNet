import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.addPost();
    }
    
    let onChangeEvent = (e) => {
        props.onChange(e.target.value);
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
                {props.posts.map(e => (<Post message={e.message} like={e.like}/>))}
            </div>
        </div>
    </div>
}

export default SelfPosts;