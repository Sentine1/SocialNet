import React from 'react';
import module from './Settings.module.css'

function Settings() {
    return <nav className={module.Menu}>

        <div className={module.Items}>
            Setting 1
        </div>
        <div className={module.Items}>
            Setting 2
        </div>
        <div className={module.Items}>
            Setting 3
        </div>
        <div className={module.Items}>
            Setting 4
        </div>
        <div className={module.Items}>
            Setting 5
        </div>
        <div className={module.Items}>
            Setting 6
        </div>
        <br/>
        <br/>
        <div>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    </nav>
}

export default Settings;