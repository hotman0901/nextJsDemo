import React, { Component } from 'react';
import '../style/index.scss';

export default class Benny extends Component {
    static getInitialProps(props) {
        console.log(props.req)
        const { query, params } = props.req;
        const { id } = params;
        const { name } = query;
        console.log('id:', id);
        console.log('name:', name);
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // console.log(this.props);
    }
    render() {
        return <div className="class-name">benny</div>;
    }
}
