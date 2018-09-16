'use strict';

// load opensource code
import React from 'react';

// load self code
import css from './DetailNav.css';

// load config

// global variable

function generatorColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

export default class DetailNav extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.navHtml = this.makeNav(this.props.detailInfo4Nav);
  }

  jump = (url) => {
    window.location.href = '#' + url;
  }

  makeNav = navs => {
    return navs.map((info, i) => {
      let color = info.background;
      if (!color) {
        color = generatorColor();
      }
      console.log(color)
      return <div key={i.toString()} style={{ background: color }} onClick={this.jump.bind(this, info.url)}>
        <header>{info.title}</header>
        <article>{info.desc}</article>
      </div>
    })
  }

  render() {
    return <div className="nav_detail_box">{this.navHtml}</div>
  }

}