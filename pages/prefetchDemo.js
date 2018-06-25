import React, { Component } from 'react';
import PassH from '../components/PassH/passH';
import PrefetchHeader from '../components/Header/prefetchHeader';

export default class prefetchDemo extends Component {
    render() {
        return (
            <div>
                <PrefetchHeader />
                only by feature
                <hr />
            </div>
        );
    }
}
