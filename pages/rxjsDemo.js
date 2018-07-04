import React from 'react';
import { bindActionCreators } from 'redux';
import { startClock, addCount, serverRenderClock } from '../actions';
import { connect } from 'react-redux';
import '../style/index.scss';
import * as starAction from '../actions/star';

class RxjsDemo extends React.Component {

    render() {
        const { count, addCount, starAction, star } = this.props;
        return (
            <div>
                nextStar: <span>{star}</span>
                <hr/>
                <button onClick={() => starAction.getStar()}>rxjs-getStar</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { count: state.count, star: state.star };
};

const mapDispatchToProps = dispatch => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        starAction: bindActionCreators(starAction, dispatch)        
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RxjsDemo);
