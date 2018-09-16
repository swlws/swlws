'use strict'

// load opensource code
import React from 'react';

// load self code
import MainMenuNav from '../components/MainMenuNav';
import css from './../css/mainlayout.css';

// load config

// global variable

export default class MainLayout extends React.Component{
    constructor(){
        super();
    }

    render (){
        return (
            <div className="main_layout_header">
                <MainMenuNav/>
            </div>
        )
    }
}