/* eslint func-names: ["error", "never"] */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getProfile } from '../main.js';

chai.use(chaiAsPromised);
chai.should();

describe('getProfile', function () {
  it('should not throw an exception for a valid country code', function () {
    return getProfile({ countryCode: 'us' }).should.be.fulfilled;
  });

  it('should throw an exception for an invalid country code', function () {
    return getProfile({ countryCode: 'xx' }).should.be.rejected;
  });

  it('should return an object with 8 keys', async function () {
    const a = await getProfile({ countryCode: 'us' });
    return Object.keys(a).should.have.lengthOf(4);
  });
});
