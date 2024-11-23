import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/shopping-cart">
        <div className="App">
          <Cart />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
