import React, { Component } from 'react';
import Header from '../components/Header/header';
import Head from 'next/head';
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
                <p>hihi index</p>
                <span className="yaya">yayayya</span>
                <hr/>
                <style jsx>
                    {`
                        .co_index {
                            font-size: 30px;
                            color: gray;
                        }

                        p {
                            color: #fff;
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
            </div>
        );
    }
}
