import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Routing from './Routing';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrected import


const root = ReactDOM.createRoot(document.getElementById('root'));
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Routing/>}>
          <Route path='/Home' element={<Routing/>}></Route>
          <Route path='/About' element={<Routing/>}></Route>
          <Route path='/Blog' element={<Routing/>}></Route>
          <Route path='/Contact' element={<Routing/>}></Route>
          <Route path='/Routing' element={<Routing/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

