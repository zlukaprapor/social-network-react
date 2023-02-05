import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
import Messengers from "./Components/Messengers";
import News from "./Components/News";
import Musics from "./Components/Musics";
import Settings from "./Components/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Profile/>
                <div className="App_content">
                    <Routes>
                        <Route path='/profile' element={<Posts/>}/>
                        <Route path='/messengers' element={<Messengers/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Musics/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
