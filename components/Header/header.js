import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// styleed-component
const Content = styled.span`
    color: red;
    font-size: 50px;
`;

export default class Header extends Component {
    render() {
        return (
            <div className="hello">
                <p>Header</p>
                <br/>
                <Content>content</Content>
                <br/>
                <Link href="/cssDemo">
                    <a>cssDemo</a>
                </Link>
                <Link href="/staticFileDemo">
                    <a>staticFileDemo</a>
                </Link>
                <Link href="/linkDemo">
                    <a>linkDemo</a>
                </Link>
                <Link href="/passHrefDemo">
                    <a>passHrefDemo</a>
                </Link>
                <Link href="/routerDemo1">
                    <a>next/routerDemo1</a>
                </Link>
                <Link href="/routerDemo2">
                    <a>withRouterDemo2</a>
                </Link>
                
                {/* <Link href="/prefetchDemo">
                    <a>prefetchDemo</a>
                </Link> */}
                
                <style jsx>{`
                    .hello {
                        font: 15px Helvetica, Arial, sans-serif;
                        background: #eee;
                        padding: 100px;
                        text-align: center;
                        transition: 100ms ease-in background;
                    }
                    .hello:hover {
                        background: #ccc;
                    }
                    a
                    {
                        margin: 0 10px;
                    }
                `}</style>
            </div>
        );
    }
}
