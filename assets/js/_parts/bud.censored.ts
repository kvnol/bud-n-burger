const censored = ((w, d) => {
  'use strict';

  const body = d.querySelector('body');
  const btn = d.querySelector('[data-js="censored-yes"]');
  const modal = d.querySelector('[data-js="censored"]');

  if (Cookie.exists('ageGate')) {
    return modal.remove();
  } else {
    btn.addEventListener('click', () => {
      Cookie.set('ageGate', { expires: 1 });
      body.classList.remove('is-censored');
      return modal.remove();
    }, 'false')
  }
})(window, document)
