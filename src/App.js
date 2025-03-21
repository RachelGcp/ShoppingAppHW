import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ShoppingList from './components/ShoppingList';
import OrderDetails from './components/OrderDetails';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<ShoppingList />} />
            <Route path="/order" element={<OrderDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;