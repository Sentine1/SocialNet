import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import Dialog from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Audio from './components/Audios/Audio'
import Video from './components/Videos/Videos'
import Friends from './components/Friends/Friends'
import Settings from './components/Settings/Settings'
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Menu state={props.state}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialog MapPersonList={props.state.messagePage.MapPersonList}
                                                MapMessage={props.state.messagePage.MapMessage}/>}/>
                        <Route path='/profile' element={<Content profilePage={props.state.profilePage} addPost={props.addPost} editText={props.editText}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/audios' element={<Audio/>}/>
                        <Route path='/videos' element={<Video/>}/>
                        <Route path='/friends' element={<Friends state={props.state.FriendsData}/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
