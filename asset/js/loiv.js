const navMenu = document.getElementById('nav-menu'),
navOpen = document.getElementById('nav-open'),
navClose = document.getElementById('nav-close');

navOpen.addEventListener('click', () => {
	navMenu.classList.add('show');
	navClose.classList.add('showclose');

})

navClose.addEventListener('click', () => {
	navMenu.classList.remove('show');
	navClose.classList.remove('showclose');
})
