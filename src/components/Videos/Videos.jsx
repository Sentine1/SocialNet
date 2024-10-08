import React from "react";
import module from "./Videos.module.css"
import Menu from "./VideosItems/Menu"
import Content from "./VideosItems/Content";

function Videos (){
    return(
        <div className={module.Dialogs}>
            <Menu />
            <Content />
        </div>
    )
}

export default Videos;