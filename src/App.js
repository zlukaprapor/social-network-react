import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
       <Header  />
       <Navbar  />
       <Profile  />
        <Posts />
    </div>
  );
}

export default App;
