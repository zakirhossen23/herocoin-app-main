import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Password } from './pages/auth/password/Password';
import { Register } from './pages/auth/register/Register';
import { Verification } from './pages/auth/verify/Verification';
import { Splash } from './pages/splash/Splash';
import { Welcome } from './pages/welcome/Welcome';
import { Home } from './pages/home/Home';
import { Cards } from './pages/cards/Cards';
import { CardsOne } from './pages/cards/one/CardsOne';
import { CardsTwo } from './pages/cards/two/CardsTwo';
import { CardsThree } from './pages/cards/three/CardsThree';
import { Donate } from './pages/donate/Donate';
import { ThankYou } from './pages/thank-you/ThankYou';
import { Stories } from './pages/stories/Stories';
import { HomeApp } from './pages/home-app/HomeApp';
import { Order } from './pages/order/Order';
import { Prescription } from './pages/prescription/Prescription';
import { Date } from './pages/date/Date';
import { Time } from './pages/time/Time';
import { Doctors } from './pages/doctors/Doctors';
import { Explanation } from './pages/explanation/Explanation';
import { Cart } from './pages/cart/Cart';
import { Location } from './pages/location/Location';
import { Accept } from './pages/accept/Accept';
import { Ticket } from './pages/ticket/Ticket';

import { Name } from './pages/auth/name/name';
import { DonateBlockchain } from './pages/donate/donateblockchain/donateblockchain';
import { NFT } from './pages/nft/NFT';
import { NFTALL } from './pages/nft/nftall';
import { CryptoPunks } from './pages/cryptoPunks/CryptoPunks';
import { CryptoPunksALL } from './pages/cryptoPunks/CryptoPunksall';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/password">
          <Password />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/verify">
          <Verification />
        </Route>
        <Route exact path="/name">
          <Name />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/app">
          <HomeApp />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/order/accept">
          <Accept />
        </Route>
        <Route exact path="/ticket">
          <Ticket />
        </Route>
        <Route exact path="/prescription">
          <Prescription />
        </Route>
        <Route exact path="/explanation">
          <Explanation />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/location">
          <Location />
        </Route>
        <Route exact path="/date">
          <Date />
        </Route>
        <Route exact path="/time">
          <Time />
        </Route>
        <Route exact path="/doctors">
          <Doctors />
        </Route>
        <Route exact path="/cards">
          <Cards />
        </Route>
        <Route path="/cards/1">
          <CardsOne />
        </Route>
        <Route path="/cards/2">
          <CardsTwo />
        </Route>
        <Route path="/cards/3">
          <CardsThree />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/donateblockchain">
          <DonateBlockchain />
        </Route>
        <Route path="/thank-you">
          <ThankYou />
        </Route>
        <Route path="/NFT">
          <NFT />
        </Route>
        <Route path="/CryptoPunks">
          <CryptoPunks />
        </Route>
        <Route path="/stories">
          <Stories />
        </Route>
        <Route path="/app">
          <Redirect to="/?context=app" />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/assets/NFT/">

        </Route>
        <Route path="/NFTALL">
          <NFTALL />
        </Route>
        <Route path="/CryptoPunksALL">
          <CryptoPunksALL />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
