import assert from "assert"

import { VISA, MASTERCARD, DISCOVER, AMEX, DINERS, JCB } from "./index"
import { parseCardType } from "./index"

describe("parseCardType", () => {
  const tests = [
    [ "4242 4242 4242 4242", VISA ],
    [ "5555 5555 5555 4444", MASTERCARD ],
    [ "3782 822463 10005", AMEX ],
    [ "6011 1111 1111 1117", DISCOVER ],
    [ "3056 930902 5904", DINERS ],
    [ "3530 1113 3330 0000", JCB ]
  ]
  
  tests.forEach(test => {
    it(`should match ${test[0]} to ${test[1]}`, () => {
      assert.equal(parseCardType(test[0]), test[1])
    })
  })
})

import { applyMask } from "./index"

describe("applyMask", () => {
  const tests = [
    [ "4242", "XXXX XXXX XXXX XXXX", "4242 " ],
    [ "3782 822463 100", "XXXX XXXXXX XXXXX", "3782 822463 100" ],
    [ "08", "XX / XX", "08 / " ],
    [ "0817", "XX / XX", "08 / 17" ],
    [ "08175", "XX / XX", "08 / 17" ],
  ]
  
  tests.forEach(test => {
    it(`should mask ${test[0]} with ${test[1]} to ${test[2]}`, () => {
      assert.equal(applyMask(test[0], test[1]), test[2])
    })
  })
})

import { applyNumberMask } from "./index"

describe("applyNumberMask", () => {
  const tests = [
    [ "4242424242424242", "4242 4242 4242 4242" ],
    [ "5555555555554444", "5555 5555 5555 4444" ],
    [ "378282246310005", "3782 822463 10005" ],
    [ "6011111111111117", "6011 1111 1111 1117" ],
    [ "30569309025904", "3056 930902 5904" ],
    [ "3530111333300000", "3530 1113 3330 0000" ],
    [ "424242", "4242 42" ],
  ]
  
  tests.forEach(test => {
    it(`should mask number ${test[0]} to ${test[1]}`, () => {
      assert.equal(applyNumberMask(test[0]), test[1])
    })
  })
})

import { applyExpiryMask } from "./index"

describe("applyExpiryMask", () => {
  const tests = [
    [ "0", "0" ],
    [ "08", "08 / " ],
    [ "081", "08 / 1" ],
    [ "0817", "08 / 17" ],
    [ "08175", "08 / 17" ],
  ]
  
  tests.forEach(test => {
    it(`should mask expiry ${test[0]} to ${test[1]}`, () => {
      assert.equal(applyExpiryMask(test[0]), test[1])
    })
  })
})
