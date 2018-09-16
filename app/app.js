'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Link} from 'react-keeper'

import css from './css/base.css'
import MainLayout from './pages/mainlayout'
import Home from './pages/home'
import Resume from './pages/resume'
import Blog from './pages/blog'
import Webdemo from './pages/webdemo'


const App = () => {
  return (
  <HashRouter>
    <div>
      <Route component={ MainLayout } path="/" />
      <Route component={ Home } path="/home" />
      <Route component={ Webdemo } path="/webdemo" />
      <Route component={ Blog } path="/blog" />
      <Route component={ Resume } path="/resume" />
    </div>
  </HashRouter>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);