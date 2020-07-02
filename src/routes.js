import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Faq from './components/pages/Faq';
import Account from './components/pages/Account';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Tutorials from './components/pages/Tutorials';
import Store from './components/pages/Store';
import NotFound from './components/pages/NotFound';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/store" component={ Store }/>
        <Route path="/tutorials" component={ Tutorials }/>
        <Route path="/faq" component={ Faq }/>
        <Route path="/account" component={ Account }/>
        <Route path="/login" component={ Login }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="*" component={ NotFound }/>
    </Switch>
)