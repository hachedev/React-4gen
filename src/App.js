import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Index from './views/Index'
import NewPost from './views/NewPost';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="/create">
          <Navbar />
          <NewPost />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
