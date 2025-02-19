import React from "react";
import MenuItems from "./DialogMenuItems";
import DialogMenu from "./DialogMenu";
import {connect} from "react-redux";

// function OldDialogMenuContainer(props) {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let data = state.messagePage.PersonList.map(e => <MenuItems id={e.id} name={e.name}/>);
//                     return <DialogMenu data={data}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        data: state.messagePage.PersonList.map(e => <MenuItems id={e.id} name={e.name}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogMenuContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMenu);

export default DialogMenuContainer;