import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
