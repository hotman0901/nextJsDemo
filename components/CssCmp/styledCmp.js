import React, { Component } from 'react';
import styled from 'styled-components';
import './style.scss';

const SCdiv = styled.div`
    background-color: pink;
    color: #fff;
`;

export default class StyledCmp extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SCdiv>
                SCdiv
                <p>style.scss</p>
            </SCdiv>
        );
    }
}