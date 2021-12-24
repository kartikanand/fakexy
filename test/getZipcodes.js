/* eslint func-names: ["error", "never"] */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getZipcodes } from '../main.js';

chai.use(chaiAsPromised);
chai.should();

describe('getZipcodes', function () {
  it('should not throw an exception for a valid country code', function () {
    return getZipcodes({ countryCode: 'us' }).should.be.fulfilled;
  });

  it('should throw an exception for an invalid country code', function () {
    return getZipcodes({ countryCode: 'xx' }).should.be.rejected;
  });

  it('should return an object with at least one element', async function () {
    const a = await getZipcodes({ countryCode: 'us' });
    return Object.keys(a).should.have.lengthOf.above(1);
  });
});
