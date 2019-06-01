import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import './styles/index.css';
import Navbar from "./components/Navbar";


ReactDOM.render(<App/>, document.getElementById('main'));
ReactDOM.render(<Navbar/>, document.getElementById('header'));