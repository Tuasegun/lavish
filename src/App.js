import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Signup from './components/pages/Signup/Signup'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services'  component={Services}/>
        <Route path='/products'  component={Products}/>
        <Route path='/sign-up' component={Signup}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
