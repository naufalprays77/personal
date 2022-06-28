import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './App';

function Url() {
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Url;
