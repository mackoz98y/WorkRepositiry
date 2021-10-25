const nav = document.querySelector('.nav__navbar');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__navbar-item');

const handleNav = () => {
	nav.classList.toggle('nav__navbar--active');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__navbar--active');
		});
	});

	
};

navBtn.addEventListener('click', handleNav);