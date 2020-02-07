import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
    return ( 
        <Router>
            <div className = "App" >
                <h1 > Sistema de rutas basico </h1>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>

                <Switch>
                    <Route exact path="/"  component={Home}/>
                    <Route exact path="/contact"  component={Contact}/>
                    <Route exact path="/users"  component={Users}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h1> Estamos en el componente home </h1>;
}

function Contact() {
    return <h1> Estamos en el componente contac </h1>;
}

function Users() {
    return <h1> Estamos en el componente userss </h1>;
}
function Error404() {
    return <h1> Estamos en el componente not found </h1>;
}
export default App;