require('./app-rafael');

// The one and only global
window.App = window.App || {
	
	init: function(){

		console.log('init!');

	}

};

$(function() {
	App.init();
});