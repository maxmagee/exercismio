var Luhn = require('./luhn');

describe('Luhn', function () {
  it('single digit strings can not be valid', function () {
    const luhn = new Luhn('1');
    expect(luhn.valid).toEqual(false);
  });

  it('A single zero is invalid', function () {
    const luhn = new Luhn('0');
    expect(luhn.valid).toEqual(false);
  });

  it('valid Canadian SIN', function () {
    const luhn = new Luhn('046 454 286');
    expect(luhn.valid).toEqual(true);
  });

  it('invalid Canadian SIN', function () {
    const luhn = new Luhn('046 454 287');
    expect(luhn.valid).toEqual(false);
  });

  it('invalid credit card', function () {
    const luhn = new Luhn('8273 1232 7352 0569');
    expect(luhn.valid).toEqual(false);
  });

  it('valid strings with a non-digit added become invalid', function () {
    const luhn = new Luhn('046a 454 286');
    expect(luhn.valid).toEqual(false);
  });
});
