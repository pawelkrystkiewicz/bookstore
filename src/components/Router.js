import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App';
import AdminPanel from './AdminPanel';
import PageNotFound from './PageNotFound';


export default class Router extends React.Component{
    render(){
        retunr(
        <BrowserRouter>
        <Switch>
        <Route exact path ='/' component={App}/>
        <Route exact path ='/admin' component={AdminPanel}/>
        <Route component={PageNotFound}/>
        </Switch>
        </BrowserRouter>
        );
    }
}