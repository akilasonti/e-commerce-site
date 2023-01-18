import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
// import Default from "./components/Default";
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={ProductList} /> */}
        <Route exact path="/e-commerce-site" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path='/' render={() => (<Redirect to="/e-commerce-site" />)} />
        <Route path='*' render={() => (<Redirect to="/e-commerce-site" />)}/>
        <Route component={ProductList} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
