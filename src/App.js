import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
import Messengers from "./Components/Messengers";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
            <div className="App_content">
                <Posts/>
                {/*<Messengers />*/}
            </div>

        </div>
    );
}

export default App;
