import React from "react";
import module from "./DialogMenu.module.css";
import MenuItems from "./DialogMenuItems";

function DialogMenu (props){
    let data =props.PersonList.map(e => <MenuItems id={e.id} name={e.name}/>);
    return(     
        <div className={module.Menu}>
            {data}
        </div>
    )
}

export default DialogMenu;