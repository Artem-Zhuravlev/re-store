import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';  
import { HomePage, CartPage } from '../pages';
import { withBookstoreService } from '../hoc';

const App = ( {bookstoreService} ) => {
  console.log(bookstoreService.getBooks());
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/cart' component={CartPage} />
      </Switch> 
    </div>
  );
};

export default withBookstoreService()(App);