import reportWebVitals from './reportWebVitals';
import state, {subscribe,addMessage, addPost, editMessageText, editText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} editText={editText} addMessage={addMessage} editMessageText={editMessageText}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
