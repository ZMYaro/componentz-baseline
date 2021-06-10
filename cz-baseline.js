'use strict';

var TEMP_CZ_DIR = '.';

window.addEventListener('DOMContentLoaded', function () {
	var designLanguage =
		navigator.userAgent.match(/[^A-Z^0-9]windows[^A-Z^0-9]/i) ? 'fluent' :
		navigator.userAgent.match(/[^A-Z^0-9]mac os[^A-Z^0-9]/i) ? 'hig' :
		navigator.userAgent.match(/[^A-Z^0-9](android|cros)[^A-Z^0-9]/i) ? 'material' : '';
	
	var baseLink = document.createElement('link'),
		themeLink = document.getElementById('cz-theme') || document.createElement('link'),
		darkThemeLink = document.getElementById('cz-dark-theme') || document.createElement('link');
	themeLink.id = 'cz-theme';
	darkThemeLink.id = 'cz-dark-theme';
	darkThemeLink.media = '(prefers-color-scheme: dark)';
	baseLink.rel =
		themeLink.rel =
		darkThemeLink.rel = 'stylesheet';
	baseLink.type =
		themeLink.type =
		darkThemeLink.type = 'text/css';
	baseLink.href = `${TEMP_CZ_DIR}/cz-baseline.css`;
	themeLink.href = `${TEMP_CZ_DIR}/cz-${designLanguage}.css`;
	darkThemeLink.href = `${TEMP_CZ_DIR}/cz-${designLanguage}-dark.css`;
	document.head.appendChild(baseLink);
	document.head.appendChild(themeLink);
	document.head.appendChild(darkThemeLink);
});
