const { classBody } = require("babel-types");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const body = document.querySelector('body');
const changeTheme = document.querySelector('#theme-switch-toggle');

body.classList.add(Theme.LIGHT);
changeTheme.addEventListener('change', onChangeCheckBox);

function onChangeCheckBox(e) {
	body.classList.toggle(Theme.DARK);
	if (body.classList.contains(Theme.DARK)) {
		changeTheme.setAttribute('checked', 'true');
	}
	else {
		changeTheme.setAttribute('checked', 'false');
		}
	localStorage.setItem('isThemeSwitchToggleOn', changeTheme.getAttribute('checked'));
}
