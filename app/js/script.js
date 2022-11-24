const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const links = document.querySelector('.header__links');
const linksClone = links.cloneNode(true);

linksClone.className = '';
linksClone.classList.add('header__menu', 'has-fade', 'hide-for-desktop');
header.append(linksClone);

const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function (e) {
  if (header.classList.contains('open')) {
    fadeElems.forEach(function (elem) {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
    header.classList.remove('open');
  } else {
    header.classList.add('open');
    fadeElems.forEach(function (elem) {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
  }
});
