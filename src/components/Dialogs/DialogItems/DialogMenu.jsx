import React from "react";
import module from "./DialogMenu.module.css";
import MenuItems from "./DialogMenuItems";

function DialogMenu (){
    return(     
        <div className={module.Menu}>
            <MenuItems id='1' name='person One' />
            <MenuItems  id="2" name="Person two" />
            <MenuItems className = {module.active} id="3" name="person Three" />
            <MenuItems id={4} name = "four" />
        </div>
    )
}

export default DialogMenu;