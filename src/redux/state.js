import MenuItems from "../components/Dialogs/DialogItems/DialogMenuItems";
import Items from "../components/Dialogs/DialogItems/DialogContentItems";
import React from "react";
import {NavLink} from "react-router-dom";
import {rerenderEntireTree} from "../render";

let PersonsList = [
    {id: 1, name: 'person One'},
    {id: 2, name: 'Person two'},
    {id: 3, name: 'person Three'},
    {id: 4, name: 'person four'},
    {id: 5, name: 'person five'},
];

let Messages = [

    {message: "Message one", direction: "from"},
    {message: "Answer one", direction: "to"},
    {message: "Message two", direction: "from"},
    {message: "Message Three", direction: "from"},
    {message: "Answer two", direction: "to"},
    {message: "Message Four", direction: "from"}
]

let Friends = [
    {name: "Person one", ava: "ava1.png"},
    {name: "Person two", ava: "ava2.png"},
    {name: "Person three", ava: "ava3.png"},
    {name: "Person four", ava: "ava4.png"},
    {name: "Person n", ava: "avan.png"}
]


let MapMessage = Messages.map(e => (<Items message={e.message} direction={e.direction}/>));
let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name}/>));
let FriendsName = Friends.map(e => (<div><NavLink to="/friends">{e.name}</NavLink></div>));
let FriendsAva = Friends.map(e => (<img src={e.ava} alt={e.name + " avatar"}/>));

let state = {
    messagePage: {
        MapPersonList: [MapPersonList],
        MapMessage: [MapMessage],
    },
    profilePage: {
        PostMessage: [
            {message: "Test message 1", like: 40},
            {message: "Test message 2", like: 20},
            {message: "Test message 5", like: 40},
            {message: "Test message 3", like: 60}],
    },
    FriendsData: {
        ava: [FriendsAva], names: [FriendsName],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        message: postMessage?postMessage:"",
        like:1
    }
    state.profilePage.PostMessage.push(newPost);
    rerenderEntireTree(state);
}
export default state;