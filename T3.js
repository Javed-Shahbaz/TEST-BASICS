class Arithmatics {
  plus(a, b) {
    return a + b;
  }
  
  minus(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  division(a, b) {
    if (b === 0) {
      console.log ('divide by zero not allowed');
    }
    return a / b;
  }
}

module.exports = Arithmatics;