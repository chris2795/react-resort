import React from 'react';
import './App.css';

//creating new js file
import Home from "./pages/Home";
import Room from './pages/Room.js';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.js';

//Step 1
//import route and switch for routing other pages and if none exist
// it will be error page thats the function of switch
import {Route, Switch} from 'react-router-dom';


//Step 2
//Navbar create js file for navbar
import Navbar from "./components/Navbar.js";

function App() {
  return (
  <>
    {/* Step 1 Routing and switch for pages and error */}
    {/* Step 2 Navbar */}
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Room} />
    <Route exact path="/rooms/:slug"
     component={SingleRoom} />
     <Route component={Error} />
    </Switch>
  </>
  );
}

export default App;
