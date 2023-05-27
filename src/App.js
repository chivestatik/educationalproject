import React, { useState } from 'react';
import { Header } from './components';
import { Home, NotFound, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
