'use strict'

// load opensource code
import React from 'react';

// load self code
import DetailNav from './../components/DetailNav.js';
import css from './../css/home.css';

// load config
import cfg from './../config/web.config.js';

// global variable
let navs = cfg.detailNavs;

function NavTitle() {
  return (
    <div className="home_nav_title">
      <p>SHARE</p>
      <p>分享知识与快乐</p>
    </div>
  )
}

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavTitle />
        <DetailNav detailInfo4Nav={navs} />
      </div>
    )
  }
}
