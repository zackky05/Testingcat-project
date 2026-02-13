// 1️⃣ Scroll to top when "Back to top" is clicked

const backToTop = document.querySelector('footer a[href="#"]');

backToTop.addEventListener('click', function(e) {

  e.preventDefault();

  window.scrollTo({

    top: 0,

    behavior: 'smooth'

  });

});

// 2️⃣ Form validation for cat name

const form = document.querySelector('form');

const catNameInput = form.querySelector('input[type="text"]');

const catOwnership = form.querySelectorAll('input[name="cat-ownership"]');

form.addEventListener('submit', function(e) {

  const ownsCat = [...catOwnership].find(r => r.checked)?.value === 'yes';

  

  if (ownsCat && catNameInput.value.trim() === '') {

    e.preventDefault();

    alert('Please enter your cat\'s name!');

    catNameInput.focus();

  }

});

// 3️⃣ Highlight favorite cat selection

const favCat = document.getElementById('favourite-cat');

favCat.addEventListener('change', function() {

  if(this.value) {

    alert(`Great choice! I'm glad you like the ${this.options[this.selectedIndex].text}.`);

  }

});