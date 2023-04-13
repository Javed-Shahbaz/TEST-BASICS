const Arithmatics = require('./T3')


describe ('Computations', () => {
    let a;
    beforeEach(() => {
        a = new Arithmatics();
      });
    test('Plus', () => {
      expect(a.plus(4,7)).toBe(11);
    });
  
    test('Minus', () => {
      expect(a.minus(8,2)).toBe(6);
    });

    test('Multiply', () => {
        expect(a.multiply(3,6)).toBe(18);
      });

      test('Division', () => {
        expect(a.division(18,3)).toBe(6);
      });
  });