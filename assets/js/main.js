var censored = (function (w, d) {
    'use strict';
    var body = d.querySelector('body');
    var btn = d.querySelector('[data-js="censored-yes"]');
    var modal = d.querySelector('[data-js="censored"]');
    if (Cookie.exists('ageGate')) {
        w.addEventListener('load', function () {
            body.classList.remove('is-censored');
        }, 'false');
        return modal.remove();
    }
    else {
        w.addEventListener('load', function () {
            modal.classList.add('active');
        }, 'false');
        btn.addEventListener('click', function () {
            Cookie.set('ageGate', { expires: 1 });
            body.classList.remove('is-censored');
            return modal.remove();
        }, 'false');
    }
})(window, document);
var filter = (function (win, doc) {
    'use strict';
    var state = doc.querySelector('[data-js="estado"]');
    var city = doc.querySelector('[data-js="cidades"]');
    var district = doc.querySelector('[data-js="regioes"]');
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
        var barItem = doc.querySelectorAll('.bar-item');
        var itemValue = this.options[this.selectedIndex].value;
        var itemClass = ('.' + itemValue).toString();
        Array.prototype.forEach.call(barItem, function (item, index) {
            var itemSelected = doc.querySelectorAll(itemClass);
            if (itemValue === 'estados' || itemValue === 'cidades' || itemValue === 'regioes')
                return item.classList.remove('bar-item--hidden');
            item.classList.add('bar-item--hidden');
            Array.prototype.forEach.call(itemSelected, function (item) {
                item.classList.remove('bar-item--hidden');
            });
        });
    }
    function disableSiblings() {
        var itemValue = this.options[this.selectedIndex].value;
        if (itemValue !== 'estados' || itemValue !== 'cidades' || itemValue !== 'regioes')
            return this.nextSibling.removeAttribute('disabled');
    }
    function removeCity() {
        var itemValue = this.options[this.selectedIndex].value;
        Array.prototype.forEach.call(this.nextSibling.options, function (item, index) {
            if (index !== 0) {
                item.style.display = 'none';
            }
            if (item.value === 'estados' || item.value === 'cidades' || item.attributes[0].value === itemValue) {
                item.style.display = 'block';
            }
        });
    }
})(window, document);
