// import { connect } from 'react-redux';
// import Clock from './Clock';
// import AddCount from './AddCount';
// import React from 'react';

// const Page = props => {
//     const { title, lastUpdate, light } = props;
//     return (
//         <div>
//             <h1>{title}</h1>
//             <Clock lastUpdate={lastUpdate} light={light} />
//             <AddCount />
//         </div>
//     );
// };

// export default connect((state) =>
// {
//     console.log('state:', state);
//     return state;
// })
// (Page);



import { connect } from 'react-redux';
import Clock from './Clock';
import AddCount from './AddCount';
import React, { Component } from 'react';

class Page extends Component {
    render() {
        const { title, lastUpdate, light } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <Clock lastUpdate={lastUpdate} light={light} />
                <AddCount />
            </div>
        );
    }
}

export default connect(state => state)(Page);
