import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Whoarewe from './components/Whoarewe';
import Services from './components/Services';
import Searching from './components/Searching';
import Features from './components/Features';
import Howitworks from './components/Howitworks';
import Signup from './components/Signup';
import Team from './components/Team';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Whoarewe />
    <Services />
    <Searching />
    <Features />
    <Howitworks />
    <Signup />
    <Team />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
