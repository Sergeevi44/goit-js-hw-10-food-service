const { classBody } = require("babel-types");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const changeTheme = document.querySelector('#theme-switch-toggle');


 body.classList.add(Theme.LIGHT);


 changeTheme.addEventListener('change', onChangeCheckBox);

function onChangeCheckBox() {
	 
	 body.classList.toggle(Theme.DARK);
	 
	 sessionStorage.setItem('current-theme', body.getAttribute('class'));
}
