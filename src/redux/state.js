import MenuItems from "../components/Dialogs/DialogItems/DialogMenuItems";
import Post from "../components/Content/SelfPosts/Post/Post";
import Items from "../components/Dialogs/DialogItems/DialogContentItems";
import React from "react";

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

let PostMessage = Posts.map(e => (<Post message={e.message} like={e.like}/>));

let MapMessage = Messages.map(e => <Items message1={e.message}/>)

let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name}/>))

let state = {
    messagePage: {
        MapPersonList: [MapPersonList],
        MapMessage: [MapMessage]
    },
    profilePage: {
        PostMessage: [PostMessage]
    }
}

export default state;