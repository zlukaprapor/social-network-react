import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import MyNewsfeed from "./Components/MyNewsfeed";
import Friends from "./Components/Friends";
import Messages from "./Components/Messages";
import Music from "./Components/Music";
import Image from "./Components/Image";
import Video from "./Components/Video";



function App({state}) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Profile/>
                <Navbar/>
                <Routes>
                        <Route path='/myNewsfeed' element={<MyNewsfeed/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/messages' element={<Messages
                            messages={state.messagesPage.messages}
                            contacts={state.messagesPage.contacts}
                        />}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/image' element={<Image/>}/>
                        <Route path='/video' element={<Video/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
