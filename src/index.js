// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
//We want to import createStore() in our src/index.js file, where ReactDOM renders our application.
import { createStore } from 'redux'; /* code change */
//import provider
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
//To avoid passing store down through the app as a prop, we use the Provider component, 
//which is imported from react-redux. The Provider component wraps the top level component, App, 
//in this case, and is the only component where store is passed in:
//By including the Provider, we'll be able to access our Redux store and/or dispatch actions from any
// component we want, regardless of where it is on the component tree.

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> /* code change */,
    document.getElementById('root')
  );
  /*
  we call our createStore() method in src/index.js. We pass our createStore() method a reducer, 
  and then we pass our newly created store to our App component as a prop. 
  */