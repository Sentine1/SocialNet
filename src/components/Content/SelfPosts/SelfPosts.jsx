import React from 'react';
import module from './SelfPosts.module.css'

function SelfPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text?text:"Null?")
    }
    return <div className={module.Content}>
        <div>
            <div>
                <textarea ref={newPostElement}> Add new post </textarea>
                <div/>
                <div>
                    <button onClick={addPost}>Save</button>
                    <button onClick={ ()=>{alert('Damn!!')}}>Delete</button>
                </div>
                {props.PostMessage}
            </div>
        </div>
    </div>
}

export default SelfPosts;