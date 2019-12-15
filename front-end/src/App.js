import React  from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart';
import Home from './components/Home';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Model from './components/Model';

const App = () => {
  return (
  <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/productlist" component={ProductList}></Route>
          </Switch>
          <Model />
    </React.Fragment>
  );
}

export default App