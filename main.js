import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const reverseBtn = document.querySelector('.reverseBtn > span');

reverseBtn.addEventListener('click', reverseDirection);

function reverseDirection() {
  reverseBtn.classList.toggle('reverseArrow');
}
