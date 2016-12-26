/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import Timer from '../../shared/timer';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('Timer', () => {
    describe('statusInConsole', () => {
      it('should print status string', () => {
        stub(console, 'log');
        new Timer(false).statusInConsole();
        console.log.should.have.been.calledWith('My status is false');
        console.log.restore();
      });
    });
  });
});
