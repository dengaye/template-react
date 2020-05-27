import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import App from './App';
import './styles/index.css';

import About from './pages/about';
import Home from './pages/home';

ReactDom.render(
    <BrowserRouter>
        <Route path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
    </BrowserRouter>,
    document.getElementById('root'),
)