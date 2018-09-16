'use strict'

import React from 'react';

export default class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h3>Welcome To <span style={{fontSize:'50px'}}>swlws</span>.com</h3>
                <h5>this is a private website</h5>
            </div>
        )
    }
}
