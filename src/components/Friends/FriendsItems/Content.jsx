import React from "react";
import module from "./Content.module.css"

function FriendsContent (){
    return(
        <div className={module.Content}>
            <div>Send message</div>
            <div>Call</div>
            <div>Remove</div>
        </div>
    )
}

export default FriendsContent;