var navToggle = document.querySelector('.navigation__toggle');
var navMain = document.querySelector('.navigation');

navMain.classList.remove('navigation--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  }
});
