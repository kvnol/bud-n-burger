const censored = ((w, d) => {
  'use strict';

  const body = d.querySelector('body');
  const btn = d.querySelector('[data-js="censored-yes"]');
  const modal = d.querySelector('[data-js="censored"]');

  if (Cookie.exists('ageGate')) {
    w.addEventListener('load', () => {
      body.classList.remove('is-censored');
    }, 'false');
    return modal.remove();
  } else {
    w.addEventListener('load', () => {
      modal.classList.add('active');
    }, 'false');
    btn.addEventListener('click', () => {
      Cookie.set('ageGate', { expires: 1 });
      return modal.remove();
    }, 'false');
  }
})(window, document)
