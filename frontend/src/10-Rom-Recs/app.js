import React, {useState, useEffect} from 'react';
import Navbar from './nav';
import Home from './home';
import Lists from './lists';
import Shelves from './shelves';
import { Switch, Route } from 'react-router-dom';

function App() {

return (
  <main>
    <Navbar/>
    <Switch>
	    <Route path='/' exact>
	    	<Home/>
	    </Route>
	    <Route path='/lists' children={<Lists />}></Route>
	    <Route path='/shelves' children={<Shelves />}></Route>
    </Switch>
  </main>
  )
}

export default App;