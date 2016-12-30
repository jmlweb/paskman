/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import timerReducer from '../../src/client/reducers/timer-reducer';
import { toggleActive } from '../../src/client/actions/timer-actions';

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
        store.getState().getIn(['timer', 'isActive']).should.be.false;
        store.dispatch(toggleActive());
        store.getState().getIn(['timer', 'isActive']).should.be.true;
      });
    });
  });
});
