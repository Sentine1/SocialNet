import React from "react";
import module from "./DialogContent.module.css"

function DialogContent (){
    return(
        <div className={module.Content}>
            Content:
            <div>Message one</div>
            <div>Message two</div>
            <div>Message Three</div>
        </div>
    )
}

export default DialogContent;