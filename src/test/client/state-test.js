/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import timerReducer from '../../client/reducers/timer-reducer';
import { toggleEnabled } from '../../client/actions/timer-actions';

should();
let store;

describe('App State', () => {
  describe('Timer', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        timer: timerReducer,
      }));
    });
    describe('toggleEnabled', () => {
      it('should make isEnabled go from false to true and vice versa', () => {
        store.getState().getIn(['timer', 'isEnabled']).should.be.false;
        store.dispatch(toggleEnabled());
        store.getState().getIn(['timer', 'isEnabled']).should.be.true;
      });
    });
  });
});
