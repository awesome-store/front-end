import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Category from './components/pages/Category';
import Product from './components/pages/Product';
import Tutorials from './components/pages/Tutorials';
import Faq from './components/pages/Faq';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Account from './components/pages/Account';
import CookiesPolicy from './components/pages/CookiesPolicy';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/store" component={ Store }/>
        <Route path="/category" component={ Category } />
        <Route path="/product" component={ Product } />
        <Route path="/tutorials" component={ Tutorials }/>
        <Route path="/faq" component={ Faq }/>
        <Route path="/cart" component={ Cart }/>
        <PrivateRoute exact path="/account" component={ Account }/>
        <Route path="/login" component={ Login }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="/cookies-usage" component={ CookiesPolicy } />
        <Route path="*" component={ NotFound }/>
    </Switch>
)