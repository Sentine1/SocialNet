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

                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </div>
}

export default SelfPosts;