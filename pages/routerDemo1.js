import React, { Component } from 'react';
import Router from 'next/router';
import Header from '../components/Header/header'

export default class RouterDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // 切換router時候偵聽，url是代表切換到的網址
        Router.onRouteChangeStart = url => {
            console.log('url change to:', url);
        };
    }

    handleClick1 = () => {
        Router.push('/');
    };

    handleClick2 = () => {
        Router.push({
            pathname: '/staticFileDemo',
            query: {
                name: 'hello'
            }
        });
    };

    handleClick3 = () => {
        const href = '/routerDemo1?counter=10';
        const as = href;
        Router.push(href, as, { shallow: true });
    };

    componentWillReceiveProps(nextProps) {
        // const { pathname, query } = nextProps.url
        // fetch data based on the new query
    }

    render() {
        return (
            <div>
                <Header />
                <p>Router</p>
                <span onClick={this.handleClick1} className="click">
                    click router1
                </span>
                <hr />
                <span onClick={this.handleClick2} className="click">
                    click router2
                </span>
                <hr/>
                <span onClick={this.handleClick3} className="click">
                    click router3
                </span>
                <style jsx>
                    {`
                        .click {
                            cursor: pointer;
                        }
                    `}
                </style>
            </div>
        );
    }
}
