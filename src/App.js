import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routers/About';
import Home from './routers/Home';
import Navigation from './components/Navigation'

function App(){
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
        </HashRouter>
    )
}

export default App;
