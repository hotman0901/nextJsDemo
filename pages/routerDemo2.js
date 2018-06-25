import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Header from '../components/Header/header'


class HocRouter extends Component {
    handleClick = () => {
        const {router} = this.props;
        router.push('/');
    };

    render() {
        return (
            <div className="class-name">
                <Header />
                <div>router</div>
                <hr/>
                <div onClick={this.handleClick}>click me</div>
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

export default withRouter(HocRouter);
