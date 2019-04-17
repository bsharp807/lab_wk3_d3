const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  bindEvents() {
    PubSub.subscribe('primeChecker:isPrimeOut', (event) => {
      const result = event.detail;
      this.displayResult(result);
    });
  }

  displayResult(result) {
    const resultElement = document.querySelector('#result');
    if(result) {
      resultElement.textContent = `This number is Optimus Prime`
    } else {
      resultElement.textContent = `This number is not Optimus Prime`
    }
  }

}

module.exports = ResultView;
