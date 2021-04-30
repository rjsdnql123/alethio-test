import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import createStore from './feature/store';
import { Provider } from 'react-redux';

const store = createStore();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

export default Root;
