import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MenuItems from "./components/Dialogs/DialogItems/DialogMenuItems";
import Items from "./components/Dialogs/DialogItems/DialogContentItems";
import Post from "./components/Content/SelfPosts/Post/Post";

let PersonsList = [
    {id: 1, name: 'person One'},
    {id: 2, name: 'Person two'},
    {id: 3, name: 'person Three'},
    {id: 4, name: 'person four'},
    {id: 5, name: 'person five'},
];

let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name}/>))

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App MapPersonList={MapPersonList} MapMessage={MapMessage} PostMessage={PostMessage}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
