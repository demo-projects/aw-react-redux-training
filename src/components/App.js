import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import Users from './pages/Users';
import Albums from './pages/Albums';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li> <Link to="/users">users</Link> </li>          
          <li> <Link to="/albums">albums</Link> </li>
        </ul>
      </div>

      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/albums" component={Albums} />

      <Redirect path="/" to="/users" />
    
    </BrowserRouter>
  )
}

export default App;
