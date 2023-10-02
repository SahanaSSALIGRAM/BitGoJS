import 'should';

import { BitGoAPI } from '@bitgo/sdk-api';
import { TestBitGo, TestBitGoAPI } from '@bitgo/sdk-test';

import { Core, Tcore } from '../../src/index';

describe('Core', function () {
  let bitgo: TestBitGoAPI;
  before(function () {
    bitgo = TestBitGo.decorate(BitGoAPI, { env: 'mock' });
    bitgo.safeRegister('core', Core.createInstance);
    bitgo.safeRegister('tcore', Tcore.createInstance);
    bitgo.initializeTestVars();
  });
});
