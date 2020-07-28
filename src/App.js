import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Login from './components/login';
import SignUp from './components/SignUp';
import About  from './components/About';
import Welcome  from './components/Welcome';
import UnlimitedAccess  from './components/unlimitedAccess';
import PaymentDetails  from './components/PaymentDetails';
import PersonalDetails  from './components/PersonalDetails';
import Categories  from './components/Categories';
import Dashboard  from './components/dashboard';
import Post  from './components/singlePost';

function App() {
  return (
    <Router>
      <div className="page-content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/unlimited-access">
            <UnlimitedAccess />
          </Route>
          <Route path="/payment-details">
            <PaymentDetails />
          </Route>
          <Route path="/personal-details">
            <PersonalDetails />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
