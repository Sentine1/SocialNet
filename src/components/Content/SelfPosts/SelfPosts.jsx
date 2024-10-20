import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value = "";
        props.addPost(text);
    }
    
    let clearText = () =>
    {
        newPostElement.current.value =  "";
    }

    let returnText = () =>
    {
        newPostElement.current.value =  newPostElement.current.defaultValue;
    }
    
    let PostMessage = props.PostMessage.map(e => (<Post message={e.message} like={e.like}/>));
    return <div className={module.Content}>
        <div>
            <div>
                <textarea ref={newPostElement} onClick={clearText} onBlur={returnText} defaultValue="Add new post"/>
                <div/>
                <div>
                    <button onClick={addPost}>Save</button>
                    <button onClick={ ()=>{alert('Damn!!')}}>Delete</button>
                </div>
                {PostMessage}
            </div>
        </div>
    </div>
}

export default SelfPosts;