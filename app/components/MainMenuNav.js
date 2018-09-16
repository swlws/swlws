'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import css from './MainMenuNav.css';
import cfg from './../config/web.config.js'

let menus = cfg.menus;

export default class MainMenuNav extends React.Component{
    constructor(){
        super();
        this.changeMenu = this.changeMenu.bind(this);
    }

    componentDidMount(){
        var selectedClass = 'main_menu_item_selected';
        let spanEles = ReactDOM.findDOMNode(this).getElementsByTagName('span');
        if(spanEles && spanEles.length > 0){
            let ele = spanEles[0];
            ele.className += ' ' + selectedClass;

            var url = ele.getAttribute('data-url');
            window.location.href = '#' + url;
        }
    }

    changeMenu(event){
        var selectedClass = 'main_menu_item_selected';
        let dom = ReactDOM.findDOMNode(this);
        var oldSelectedEles = dom.getElementsByClassName(selectedClass);
        for(const ele of oldSelectedEles){
            ele.className = ele.className.replace(' ' +selectedClass,'');
        }

        let target = event.target;
        target.className += ' ' + selectedClass;

        var url = target.getAttribute('data-url');
        window.location.href = '#' + url;
    }

    render(){
        let html = menus.map((v, i) => <div key={i.toString()} data-id={v.id}><span onClick={this.changeMenu} data-url={v.url}>{v.title}</span></div>);
        return <div className="main_menu">{html}</div>
    }
}
