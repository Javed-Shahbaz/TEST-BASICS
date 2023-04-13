const strcheck = require('./T1');

test('String Length', () => {
    expect(strcheck('Pakistan')).toBe(8);
  });