import React from 'react';
import { bindActionCreators } from 'redux';
import { startClock, addCount, serverRenderClock } from '../actions';
import { connect } from 'react-redux';
import '../style/index.scss';

class ReduxDemo extends React.Component {

    render() {
        const { count, addCount } = this.props;
        return (
            <div>
                coount: <span>{count}</span>
                <hr />
                <button onClick={() => addCount()}>Add To Count</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { count: state.count };
};

const mapDispatchToProps = dispatch => {
    return {
        addCount: bindActionCreators(addCount, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxDemo);
