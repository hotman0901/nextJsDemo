import React, { Component } from 'react';
import Header from '../components/Header/Header';

export default class Index extends Component {
    render() {
        return (
            <div className="co_index">
                <Header />
                <p>hihi index</p>
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
                <style global jsx>{`
                    body {
                        background: black;
                    }
                `}</style>
            </div>
        );
    }
}
