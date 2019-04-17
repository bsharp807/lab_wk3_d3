const PubSub = require('../helpers/pub_sub.js');

class FormView {

  bindEvents() {
    const form = document.querySelector('#prime-checker-form')
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const number = event.target.number.value;
      PubSub.publish('formView:numberIn', number);
      });
  }


}

module.exports = FormView;
