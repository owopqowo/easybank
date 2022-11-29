const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const links = document.querySelector('.header__links');
const linksClone = links.cloneNode(true);

linksClone.className = '';
linksClone.classList.add('header__menu', 'has-fade', 'hide-for-desktop');
header.append(linksClone);

const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    fadeElems.forEach(function (elem) {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
    header.classList.remove('open');
    document.body.classList.remove('scroll-hidden');
  } else {
    header.classList.add('open');
    fadeElems.forEach(function (elem) {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
    document.body.classList.add('scroll-hidden');
  }
});

overlay.addEventListener('click', function () {
  fadeElems.forEach(function (elem) {
    elem.classList.remove('fade-in');
    elem.classList.add('fade-out');
  });
  header.classList.remove('open');
  document.body.classList.remove('scroll-hidden');
});
