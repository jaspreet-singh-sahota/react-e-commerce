import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/header.component"
import { ShopPage } from "./pages/shoppage/shop.page";
import SignInAndSingUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import './App.css'

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
