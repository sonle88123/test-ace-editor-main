import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
import CodeLearn from './CodeLearn';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<Question />} />
      <Route path="/app" element={<App />} />
      <Route path="/codelearn" element={<CodeLearn />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
