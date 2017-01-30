import * as Immutable from 'immutable';
import {
  createActions,
  handleActions,
} from 'redux-actions';
import { createSelector } from 'reselect';
import {
  MODES,
} from '../settings';

/* ACTIONS */
const PUSH_ITEM = 'PUSH_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const FINISH_ITEM = 'FINISH_ITEM';
const GET_ITEM = 'GET_ITEM';
const SET_TARGET = 'SET_TARGET';

export const {
  pushItem,
  deleteItem,
  finishItem,
  getItem,
  setTarget
} = createActions(
  PUSH_ITEM,
  DELETE_ITEM,
  FINISH_ITEM,
  GET_ITEM,
  SET_TARGET
);

/* DEFAULTS */
const historyItemMockup = Immutable.fromJS({
  createdAt: Date.now(),
  target: {
    working: 0,
    resting: 0,
  },
  hasFinished: false,
  table: {
    [MODES.working.name]: [],
    [MODES.resting.name]: [],
  },
});

export const historyMockup = [];

/* REDUCER */
const initialState = Immutable.Map(historyMockup);

const history =
