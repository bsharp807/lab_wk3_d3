const PubSub = require('../helpers/pub_sub.js');

class PrimeChecker {

  bindEvents() {
    PubSub.subscribe('formView:numberIn', (event) => {
      const number = event.detail;
      const isPrime = this.PrimeChecker(number);
      console.log('primechecker:', isPrime);
      PubSub.publish('primeChecker:isPrimeOut', isPrime);
    });
  }

  PrimeChecker (number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
    }
    return true;
};

}

module.exports = PrimeChecker;
