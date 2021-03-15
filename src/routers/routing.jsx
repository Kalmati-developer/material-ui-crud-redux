import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import SignIn from '../components/login'
import Content from '../components/Dashboard/content'
import UserTable from '../components/User/userTable'


export default function Routing() {
    
    return (
        <div>
            <Switch>
                <Route exact path="/dashboard" component={Content} />
                <Route path="/user" component={UserTable} />
            </Switch>
        </div>
    )
}
