import React from "react";
import module from "./Menu.module.css"

function Menu (){
    return(
        <div className={module.Menu}>
            <div>Playlist one</div>
            <div>Playlist two</div>
            <div>Playlist n</div>
        </div>
    )
}

export default Menu;