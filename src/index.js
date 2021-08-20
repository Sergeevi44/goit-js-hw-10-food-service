import menuItemsMarkupTemplate from './templates/menu-items.hbs';
import menu from './menu.json';

const { classBody } = require("babel-types");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const menuList = document.querySelector('js-menu');
const changeTheme = document.querySelector('#theme-switch-toggle');
const menuMarkup = createMarkup(menu);

menuList.insertAdjacentHTML('beforeend', menuMarkup);
setStorageData();


//  body.classList.add(Theme.LIGHT);


changeTheme.addEventListener('change', onChangeCheckBox);

function onChangeCheckBox() {
	 
	 body.classList.toggle(Theme.DARK);
	 
	 sessionStorage.setItem('current-theme', body.getAttribute('class'));
}
function setStorageData() {
	const savedData = sessionStorage.getItem('current-theme');
	if (savedData) {
		body.classList.add(savedData);
		changeTheme.setAttribute('checked', 'true');
	}
}
function createMarkup(menu) {
	return menuItemsMarkupTemplate(menu);
}