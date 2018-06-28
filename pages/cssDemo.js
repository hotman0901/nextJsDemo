import React, { Component } from 'react';
import Header from '../components/Header/header';
import StyledCmp from '../components/CssCmp/styledCmp';
import Head from 'next/head';
import styled from 'styled-components';
import '../style/index.scss';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    render() {
        return (
            <div className="co_index">
                <Head>
                    <title>My page title</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <Header />
                <p className="hi">hihi index</p>
                <span className="yaya">yayayya</span>
                <hr/>
                <style jsx>
                    {`
                        .co_index p{
                            color: red;
                            font-size: 60px;
                        }
                    `}
                </style>
                {/* 全域 */}
                <style global jsx>
                    {`
                        body {
                            background: black;
                        }
                    `}
                </style>
                <StyledCmp />
            </div>
        );
    }
}
