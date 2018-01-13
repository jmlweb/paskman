import { combineEpics } from 'redux-observable';
import { dataEpic } from '../data/reducer';
import { scenesEpic } from '../scenes/reducer';

export default combineEpics(dataEpic, scenesEpic);
