import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BaiTapGioHang from './BaiTapGioHang_Props/BaiTapGioHang';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="" element={<App />} >
        <Route path='' element={<Home />} > </Route>
        <Route path='home' element={<Home />} > </Route>
        <Route path='about' element={<About />} > </Route>
        <Route path='baitapgiohang' element={<BaiTapGioHang />} > </Route>

      </Route>
       
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
