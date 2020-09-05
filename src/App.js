import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ShopPage } from "./pages/shoppage/shop.page";

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
