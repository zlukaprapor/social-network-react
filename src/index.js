import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let messages = [
    {id: 1, text: "Hi"},
    {id: 2, text: "How are you"},
    {id: 3, text: "I'm fine"},
    {id: 4, text: "And you"},
    {id: 5, text: "Good"},
]
let contacts=[
    {id:1, name:"Sara"},
    {id:2, name:"Mery"},
    {id:3, name:"Alex"},
    {id:4, name:"Any"},
    {id:5, name:"Conan"},
    {id:6, name:"Gleb"},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App messages={messages} contacts={contacts}/>
    </React.StrictMode>
);

