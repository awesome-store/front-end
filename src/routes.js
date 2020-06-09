import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/faq" component={ Faq }/>
    </Switch>
)