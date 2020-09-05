import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/header.component"
import { ShopPage } from "./pages/shoppage/shop.page";
import './App.css'

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
