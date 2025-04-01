import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Dialog from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Audio from './components/Audios/Audio'
import Video from './components/Videos/Videos'
import Friends from './components/Friends/Friends'
import Settings from './components/Settings/Settings'
import {Route, Routes} from "react-router-dom";
import MenuContainer from "./components/Menu/MenuContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
    return (<div className='app-wrapper'>
        <HeaderContainer/>
        <MenuContainer/>
        <div className='app-wrapper-content'>
            <Routes>
                <Route path='/dialogs'
                       element={<Dialog/>}/>
                <Route path='/profile/:userId?'
                       element={<ContentContainer/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/audios' element={<Audio/>}/>
                <Route path='/videos' element={<Video/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    </div>);
}

export default App;
