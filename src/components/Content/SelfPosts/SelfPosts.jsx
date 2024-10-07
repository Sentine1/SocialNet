import React from 'react';
import module from './SelfPosts.module.css'
import Post from "./Post/Post";

function SelfPosts() {
    return <div className={module.Content}>
        <div>
            <div>
                <textarea> Add new post </textarea>
                <div/>
                <div>
                    <button>Save</button>
                    <button>Delete</button>
                </div>

                <Post message="Test message 1" like={40}/>
                <Post message="Test message 2" like={20}/>
                <Post message="Test message 3" like={60}/>
            </div>
        </div>
    </div>
}

export default SelfPosts;