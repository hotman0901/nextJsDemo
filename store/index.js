// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
// import { reducer } from '../reducers';

// export const initStore = initialState => {
//     return createStore(
//         reducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     );
// };

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from '../reducers';
import rootEpic from '../epic';
import { createEpicMiddleware } from 'redux-observable';


export const initStore = initialState => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(epicMiddleware, thunkMiddleware))
    );
    epicMiddleware.run(rootEpic);

    return store;
};
