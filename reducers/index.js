import { actionTypes } from '../actions';
import * as types from '../actions/actionTypes';


const initialState = {
    // lastUpdate: 0,
    // light: false,
    count: 0,
    star: 0
};

// REDUCERS
export const reducer = (state = initialState, action ={}) => {
    switch (action.type) {
        // case actionTypes.TICK:
        //     return Object.assign({}, state, {
        //         lastUpdate: action.ts,
        //         light: !!action.light
        //     });
        case actionTypes.ADD:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case types.GET_STAR_SUC:
            const {stargazers_count} = action.data;
            return Object.assign({}, state, {
                star: stargazers_count
            });
        default:
            return state;
    }
};
