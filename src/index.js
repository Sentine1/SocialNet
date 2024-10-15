import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MenuItems from "./components/Dialogs/DialogItems/DialogMenuItems";

let PersonsList = [
    {id:1, name:'person One'},
    {id:2, name:'Person two'},
    {id:3, name:'person Three'},
    {id:4, name:'person four'},
    {id:5, name:'person five'},
];

let MapPersonList = PersonsList.map(e => (<MenuItems id={e.id} name={e.name} />))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={MapPersonList}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
