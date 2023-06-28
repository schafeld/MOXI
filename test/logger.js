import { assert } from 'chai';
import sinon from 'sinon';
import logger from '../src/lib/helper/logger.mjs';

describe('logger', function() {
  it('should log the text when a string is passed', function() {
    const logSpy = sinon.spy(console, 'log');
    const text = 'Test log message';

    logger(text);

    assert.isTrue(logSpy.calledWith(text));

    logSpy.restore();
  });

  it('should log an error message when no text is passed', function() {
    const logSpy = sinon.spy(console, 'log');

    logger();

    assert.isTrue(logSpy.calledWith('MOXI: No text passed to logger.'));

    logSpy.restore();
  });
});
