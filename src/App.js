import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/header.component"
import { ShopPage } from "./pages/shoppage/shop.page";
import SignInAndSingUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import './App.css'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from './pages/homepage/homepage';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
}

export default App;
