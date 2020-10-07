import React, { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Footer from './components/Footer/Footer';

import Event from './components/Event/Event';

import Register from './components/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';
import Common from './components/Common/Common';
import EventAdded from './components/EventAdded/EventAdded';

export const UserContext=createContext();

const App = () => {
    const [loggedInUSer, setLoggedInUser] =useState({});
    const [taskAdded, setTaskAdded] =useState({});

    return (
        <>
        <UserContext.Provider value={[taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser]}>
        
        <Router>
        <Navber />
        <Switch>
        <Route  path='/home'>
            <Home />
        </Route>
       <Route  path='/login'>
        <Login />
        </Route>
       
        <PrivateRoute  path='/register/:title'>
        <Register />
        </PrivateRoute>
        <Route  path={'/register/'}>
        <Register />
        </Route>
        <Route  path='/eventType/:title'>
            <EventAdded />
        </Route>
        <Route exact path='/'>
        <Home />
        </Route>
        {/* <Redirect to='/' /> */}
         </Switch>
         <Footer />
         </Router>
    
         </UserContext.Provider>
        </>
    );
};

export default App;