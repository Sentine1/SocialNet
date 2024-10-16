import React from "react";
import module from "./DialogContent.module.css"

function DialogContent(props) {
    return (
        <div className={module.Content}>
            Content:
            {props.MapMessage}
            fix
        </div>
    )
}

export default DialogContent;