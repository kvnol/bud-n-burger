const filter = ((win, doc) => {
  'use strict';

  let state = doc.querySelector('[data-js="estado"]');
  let city = doc.querySelector('[data-js="cidades"]');
  let district = doc.querySelector('[data-js="regioes"]');

  if (win.location.pathname === '/hamburguerias/') {
    // state.addEventListener('change', barFilter, 'false');
    // state.addEventListener('change', disableSiblings, 'false');
    // state.addEventListener('change', removeCity, 'false');
    city.addEventListener('change', barFilter, 'false');
    city.addEventListener('change', disableSiblings, 'false');
    city.addEventListener('change', removeCity, 'false');
    // district.addEventListener('change', barFilter, 'false');
  }

  function barFilter() {
    let barItem = doc.querySelectorAll('.bar-item');
    let itemValue = this.options[this.selectedIndex].value;
    let itemClass = ('.' + itemValue).toString();

    Array.prototype.forEach.call(barItem, function(item, index) {
      let itemSelected = doc.querySelectorAll(itemClass);
      
      if (itemValue === 'estados' || itemValue === 'cidades' || itemValue === 'regioes')
        return item.classList.remove('bar-item--hidden');
      item.classList.add('bar-item--hidden');
      Array.prototype.forEach.call(itemSelected, function(item) {
        item.classList.remove('bar-item--hidden');
      });
    });
  }

  function disableSiblings() {
    let itemValue = this.options[this.selectedIndex].value;

    if (itemValue !== 'estados' || itemValue !== 'cidades' || itemValue !== 'regioes')
      return this.nextSibling.removeAttribute('disabled');
  }

  function removeCity() {
    let itemValue = this.options[this.selectedIndex].value;

    Array.prototype.forEach.call(this.nextSibling.options, function(item, index) {
      if (index !== 0) {
        item.style.display = 'none';
      }
      
      if (item.value === 'estados' || item.value === 'cidades' || item.attributes[0].value === itemValue) {
        item.style.display = 'block';
      }
    });
  }

})(window, document);
