'use strict'

document.getElementById('tribe').addEventListener('click', function() {

  var logo = document.getElementsByClassName('parakeat-logo')[0];
  logo.classList.remove('fade-in')
  logo.classList.add('bouncer');
  setTimeout(function() {
    logo.classList.remove('bouncer');

  }, 3000);
});



