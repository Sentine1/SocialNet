import MenuItems from "../components/Dialogs/DialogItems/DialogMenuItems";
import Post from "../components/Content/SelfPosts/Post/Post";
import Items from "../components/Dialogs/DialogItems/DialogContentItems";
import React from "react";
import {NavLink} from "react-router-dom";

let PersonsList = [
    {id: 1, name: 'person One'},
    {id: 2, name: 'Person two'},
    {id: 3, name: 'person Three'},
    {id: 4, name: 'person four'},
    {id: 5, name: 'person five'},
];

let Messages = [

    {message: "Message one"},
    {message: "Message two"},
    {message: "Message Three"},
    {message: "Message Four"}

]

let Posts = [
    {message: "Test message 1", like: 40},
    {message: "Test message 2", like: 20},
    {message: "Test message 5", like: 40},
    {message: "Test message 3", like: 60}
]

let Friends = [
    {name: "Person one",ava:"ava1.png"},
    {name: "Person two",ava:"ava2.png"},
    {name: "Person three",ava:"ava3.png"},
    {name: "Person four",ava:"ava4.png"},
    {name: "Person n",ava:"avan.png"}
]

let PostMessage = Posts.map(e => (<Post message={e.message} like={e.like}/>));

let MapMessage = Messages.map(e => <Items message1={e.message}/>);

let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name}/>));

let FriendsName = Friends.map(e => (<div><NavLink to="/friends">{e.name}</NavLink></div>));
let FriendsAva = Friends.map(e => <img src={e.ava} alt={e.name + " avatar"}/>);

let state = {
    messagePage: {
        MapPersonList: [MapPersonList],
        MapMessage: [MapMessage],
    },
    profilePage: {
        PostMessage: [PostMessage],
    },
    FriendsData: {
        ava: [FriendsAva],
        names: [FriendsName],
    }
}

export default state;