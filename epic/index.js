import { combineEpics } from 'redux-observable';
import starEpic from './star';

const epics = combineEpics(...starEpic);

export default epics;
