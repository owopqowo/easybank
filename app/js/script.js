const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const btnHamburger = document.querySelector('#btnHamburger');
btnHamburger.addEventListener('click', function (e) {
  if (header.classList.contains('open')) {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    header.classList.remove('open');
  } else {
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});
