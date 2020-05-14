import React from 'react'
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from '../pages/Dashboard/Dashboard'
import Auth from '../pages/Auth/Auth'

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth">
                        <Auth />
                    </Route>

                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App