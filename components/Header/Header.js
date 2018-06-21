import React, { Component } from 'react';
import styled from 'styled-components';

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
                <Content>content</Content>
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
                `}</style>
            </div>
        );
    }
}
