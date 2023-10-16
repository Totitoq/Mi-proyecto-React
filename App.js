import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Catalog from './Components/Catalog';
import ProductDetail from './Components/Productdetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Catalog} />
        <Route path="/category/:categoryId" component={Catalog} />
        <Route path="/item/:itemId" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
