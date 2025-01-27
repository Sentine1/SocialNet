import React from "react";
import {NavLink} from "react-router-dom";
import DialogMenu from "./Menu";
import {connect} from "react-redux";

function oldDialogMenuContainer(props) {
    let state = props.store.getState();
    let avatars = state.FriendsData.Friends.map(e => <img src={e.ava} alt={e.name + " avatar"}/>);
    let names = state.FriendsData.Friends.map(e => <div><NavLink to="/friends">{e.name}</NavLink></div>);
    return (
        <DialogMenu avatars={avatars} names={names}/>
    )
}

const mapStateToProps = (state) => {
    return {
        avatars: state.FriendsData.Friends.map(e => <img src={e.ava} alt={e.name + " avatar"}/>),
        names: state.FriendsData.Friends.map(e => <div><NavLink to="/friends">{e.name}</NavLink></div>)
    }
};

const mapDispatchToProps = (dispatch) => {

};

const DialogMenuContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMenu);
export default DialogMenuContainer;