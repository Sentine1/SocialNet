import React from "react";
import module from "./Content.module.css"

function Content (){
    return(
        <div className={module.Content}>
            Content:
            <div>Message one</div>
            <div>Message two</div>
            <div>Message Three</div>
        </div>
    )
}

export default Content;