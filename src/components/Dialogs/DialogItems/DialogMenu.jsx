import React from "react";
import module from "./DialogMenu.module.css";
import MenuItems from "./DialogMenuItems";

let PersonsList = [
    {id:1, name:'person One'},
    {id:2, name:'Person two'},
    {id:3, name:'person Three'},
    {id:4, name:'person four'},
    {id:5, name:'person five'},
];

let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name} />))

function DialogMenu (){
    return(     
        <div className={module.Menu}>
            {MapPersonList}
        </div>
    )
}

export default DialogMenu;