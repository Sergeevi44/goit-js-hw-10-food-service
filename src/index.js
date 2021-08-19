const { classBody } = require("babel-types");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const changeTheme = document.querySelector('#theme-switch-toggle');


getStorageData();


//  body.classList.add(Theme.LIGHT);


changeTheme.addEventListener('change', onChangeCheckBox);

function onChangeCheckBox() {
	 
	 body.classList.toggle(Theme.DARK);
	 
	sessionStorage.setItem('current-theme', body.getAttribute('class'));
	if (body.classList.contains(Theme.DARK)) {
		changeTheme.setAttribute('checked', 'true');
		sessionStorage.setItem('checkbox-condition', changeTheme.getAttribute('checked'));
	}
	else {
		changeTheme.setAttribute('checked', 'false');
		sessionStorage.setItem('checkbox-condition', changeTheme.getAttribute('checked'));
	}
}
function getStorageData() {
	const savedData = sessionStorage.getItem('current-theme');
	if (savedData) {
		body.classList.add(savedData);
		changeTheme.setAttribute('checked', sessionStorage.getItem('checkbox-condition'));
	}
}
