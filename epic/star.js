import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';

import * as starActions from '../actions/star';
import * as types from '../actions/actionTypes';

const getStarEpic = action$ =>
    action$.ofType(types.GET_STAR$).pipe(
        switchMap(() =>
            ajax({
                url: 'https://api.github.com/repos/zeit/next.js',
                method: 'GET'
            })
        ),
        map(({response}) => starActions.getStarSuc(response)),
        catchError((err, obs) =>
            obs.pipe(startWith(starActions.getStarErr(err)))
        )
    );

export default [getStarEpic];
