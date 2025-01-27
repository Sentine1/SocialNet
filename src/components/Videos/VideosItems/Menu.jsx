import React from "react";
import module from "./Menu.module.css"

function DialogMenu() {
    return (
        <div className={module.Menu}>
            <div>
                <a href="/Theme_one">Theme one</a>
            </div>
            <div>
                <a href="/theme_two">Theme two</a>
            </div>
            <div>
                <a href="/theme_n">Theme n</a>
            </div>
        </div>
    )
}

export default DialogMenu;