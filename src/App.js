import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Admin from './pages/Admin';
import SignIng from './pages/Admin/SigIn';
import Home from './pages/Home';
import Contact from './pages/Contact';




function App() {
    return (
        <div>
            <h1 > Estamos en app.js </h1>;
            <Admin/>
            <SignIng/>
            <Home/>
            <Contact/>

        </div>
    );
}


export default App;