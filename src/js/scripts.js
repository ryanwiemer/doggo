import lazysizes from 'lazysizes';
import intro from './components/intro';

window.addEventListener('load',
  function() {
    document.body.classList.add('loaded');
    intro();
  }, false);
