import React from 'react';
import module from './Content.module.css'

function Content() {
    return <div className={module.Content}>
        <div className={module.Img}>
            <img src="dragonball.png" alt="main page"/>
        </div>
        <div>
            Profile.img description
        </div>
        <div>
            <div>
                Wall:

                <div className={module.Items}>
                    Msgs
                </div>
                <div className={module.Items}>
                    add msgs
                </div>
            </div>
        </div>
    </div>
}

export default Content;