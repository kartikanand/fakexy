/* eslint func-names: ["error", "never"] */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getCreditcard } from '../main.js';

chai.use(chaiAsPromised);
chai.should();

describe('getCreditcard', function () {
  it('should not throw an exception for a valid creditcard brand', function () {
    return getCreditcard({ creditcardBrand: 'visa' }).should.be.fulfilled;
  });

  it('should throw an exception for an invalid creditcard brand', function () {
    return getCreditcard({ creditcardBrand: 'xx' }).should.be.rejected;
  });

  it('should return an object with 4 keys', async function () {
    const a = await getCreditcard({});
    return Object.keys(a).should.have.lengthOf(4);
  });
});
