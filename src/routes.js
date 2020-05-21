import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Faq from './components/Faq';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/faq" component={ Faq }/>
    </Switch>
)