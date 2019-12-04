import React  from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';

const App = () => {
  return (
  <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList}></Route>d
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product" component={Product}></Route>
            <Route component={Default}></Route>
          </Switch>
    </React.Fragment>
  );
}

export default App