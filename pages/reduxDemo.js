import React from 'react';
import { bindActionCreators } from 'redux';
import { startClock, addCount, serverRenderClock } from '../actions';
import { connect } from 'react-redux';
import Page from '../components/ReduxSample/Page';

class ReduxDemo extends React.Component {
    // 初始化
    static getInitialProps({ store, isServer }) {
        store.dispatch(serverRenderClock(isServer));
        store.dispatch(addCount());
        return { isServer };
    }

    componentDidMount() {
        // 啟動
        this.timer = this.props.startClock();
        // this.props.addCount();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <Page title="Index Page" />;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        startClock: bindActionCreators(startClock, dispatch)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ReduxDemo);
