import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login/Login';
import Search from './components/Search/Search';
import planetdetails from './components/details/planetDetails';
class App extends React.Component
{
    render()
    {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/search" component={Search} />   
                        <Route exact path="/planetdetails/:name" component={planetdetails} />         
                    </Switch>    
                </BrowserRouter>
                )
    }
}
export default App;
