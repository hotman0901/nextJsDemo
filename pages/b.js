import React, { Component } from 'react';

export default class B extends Component {
    // 因為自定義server.js有設定query 是id
    static getInitialProps({ query: { id } }) {
        return { id: id };
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div className="class-name">bbbb</div>;
    }
}
