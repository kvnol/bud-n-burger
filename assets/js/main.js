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
        btn.addEventListener('click', function () {
            Cookie.set('ageGate', { expires: 1 });
            return modal.remove();
        }, 'false');
    }
})(window, document);
