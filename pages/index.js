import React, { Component } from 'react';
import Header from '../components/Header/Header';
import "../style/index.scss"
export default class Index extends Component {
    render() {
        return (
            <div className="co_index">
                <Header />
                <p>hihi index</p>
                <span className="yaya">yayayya</span>
                <style jsx>
                    {`
                        .co_index {
                            font-size: 30px;
                            color: gray;
                        }

                        p {
                            color: red;
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
