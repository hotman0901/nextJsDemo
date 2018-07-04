import { ajax } from 'rxjs/ajax';
import { timer } from 'rxjs/observable/timer';
import { switchMap, map, catchError, startWith, debounce } from 'rxjs/operators';
import * as starActions from '../actions/star';
import * as types from '../actions/actionTypes';

const getStarEpic = action$ =>
    action$.ofType(types.GET_STAR$).pipe(
        debounce(() => timer(1000)),
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
