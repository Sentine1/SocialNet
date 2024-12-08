import React from 'react';
import "./Menu.css";
import Menu from "./Menu";
import {connect} from "react-redux";

function oldMenuContainer(props) {
    let state = props.store.getState();
    let data = state.FriendsData.Friends
    return (<Menu friends={data.slice(0, 3)}/>)
}

const mapStateToProps = (state) => {
    return {
        friends: state.FriendsData.Friends.slice(0, 3)
    }
};

const mapDispatchToProps = () => {
    return {}
};

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;